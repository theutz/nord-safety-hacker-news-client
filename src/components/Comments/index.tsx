import * as React from 'react';
//
import { Story } from '../../types';
import Spinner from '../Spinner';

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
        : <Spinner />
      }
    </div>
  );
};

export default Comments;