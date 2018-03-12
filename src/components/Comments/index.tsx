import * as React from 'react';
//
import { Story } from '../../types';

export interface CommentsProps {
  story?: Story;
}

const Comments = ({ story }: CommentsProps) => {
  return (
    <div className="container">
      {!!story ?
        <div className="columns">
          <div className="column">
            <h2 className="title"><a href={story.url}>{story.title}</a></h2>
          </div>
        </div>
        : <div className="columns is-centered">
          <div className="column is-narrow">
            <span className="icon has-text-info">
              <i className="fas fa-4x fa-spinner fa-pulse" />
            </span>
          </div>
        </div>
      }
    </div>
  );
};

export default Comments;