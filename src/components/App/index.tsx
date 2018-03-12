import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//
import client, { all, spread } from './client';
import { Story, Stories } from '../../types';
import MainContent from '../MainContent';
import Navbar from '../Navbar';
import { AxiosResponse } from 'axios';

export interface AppProps { }

export interface AppState {
  allStories: Stories;
  activeStory?: Story;
  allStoriesLoaded: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { allStories: [], allStoriesLoaded: false };
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
    return (
      <Router>
        <div>
          <Navbar />
          <MainContent />
        </div>
      </Router>
    );
  }
}

export default App;
