import * as React from 'react';
import { AxiosResponse } from 'axios';
import { Route } from 'react-router-dom';
//
import client, { all, spread } from './client';
import { Story, Stories } from '../../types';
import BestStories from '../BestStories';
import Comments from '../Comments';
import Navbar from '../Navbar';

export interface AppProps { }

export interface AppState {
  allStories: Stories;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { allStories: [] };
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
          });
        }));
      });
  }

  render() {
    const { allStories } = this.state;

    return (
      <div>
        <Navbar />
        <section className="section">
          <Route
            exact={true}
            path="/"
            render={
              routeProps =>
                <BestStories stories={allStories} />}
          />
          <Route
            path="/comments/:id"
            render={
              routeProps =>
                <Comments
                  story={
                    allStories
                      .find(s =>
                        s.id === +routeProps.match.params.id)}
                />}
          />
        </section>
      </div>
    );
  }
}

export default App;
