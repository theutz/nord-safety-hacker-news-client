import * as React from 'react';
//
import { Stories, Story } from '../../types';

export interface BestStoriesProps {
  stories: Stories;
  onSelectStory(story: Story): void;
}

class BestStories extends React.Component<BestStoriesProps> {
  render() {
    const { stories, onSelectStory } = this.props;

    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            <h2 className="title">Best Stories</h2>
          </div>
        </div>
        <div className="columns is-multiline">
          {stories.map((story, index) => {
            return (
              <div key={story.id} className="column is-half">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <p>
                        <strong>
                          {++index}. {story.title}
                        </strong>
                      </p>
                      <p className="has-text-grey">{story.score} by {story.by}</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="card-footer-item">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          onSelectStory(story);
                        }}
                        className="content"
                      >
                        <span className="icon">
                          <i className="fas fa-comments" />
                        </span>
                        {story.descendants}
                      </a>
                    </div>
                    <div className="card-footer-item">
                      <a href={story.url} target="_blank">
                        <span className="icon">
                          <i className="fas fa-external-link-alt" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BestStories;