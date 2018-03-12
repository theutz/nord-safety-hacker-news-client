import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AxiosResponse } from 'axios';
//
import client, { all, spread } from './client';
import { Story, Stories } from '../../types';
import BestStories from '../BestStories';
import Navbar from '../Navbar';

export interface AppProps { }

export interface AppState {
  allStories: Stories;
  activeStory?: Story;
  allStoriesLoaded: boolean;
  storyIsSelected: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { allStories: [], allStoriesLoaded: false, storyIsSelected: false };
  }

  componentDidMount() {
    this.loadStories();
  }

  loadStories = () => {
    client.get('/beststories.json')
      .then(({ data }: { data: number[] }) => {
        all(data.map((id: number) =>
          client.get(`/item/${id}.json`)
        )).then(spread((...args: AxiosResponse<object>[]) => {
          this.setState({
            allStories: args.map(r => r.data as Story),
            allStoriesLoaded: true
          });
        }));
      });
  }

  render() {
    const { allStories } = this.state;

    return (
      <Router>
        <div>
          <Navbar />
          <Route
            exact={true}
            path="/"
            render={
              routeProps =>
                <BestStories {...routeProps} stories={allStories} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
