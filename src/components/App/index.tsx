import * as React from 'react';
import { AxiosResponse } from 'axios';
//
import client, { all, spread } from './client';
import { Story, Stories } from '../../types';
import BestStories from '../BestStories';
import Comments from '../Comments';
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

  resetActiveStory = () =>
    this.setState({ activeStory: undefined, storyIsSelected: false })

  setActiveStory = (story: Story) => {
    this.setState({ activeStory: story, storyIsSelected: true });
  }

  render() {
    const { allStories, storyIsSelected, activeStory } = this.state;

    return (
      <div>
        <Navbar onBrandClick={this.resetActiveStory} />
        <section className="section">
          {storyIsSelected && activeStory
            ? <Comments story={activeStory} />
            : <BestStories
              stories={allStories}
              onSelectStory={this.setActiveStory}
            />
          }
        </section>
      </div>
    );
  }
}

export default App;
