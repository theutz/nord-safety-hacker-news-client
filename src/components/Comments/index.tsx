import * as React from 'react';
//
import { Story } from '../../types';

export interface CommentsProps {
  story: Story;
}

const Comments = ({ }: CommentsProps) => (
  <div className="container">
    <div className="columns">
      <div className="column">
        <h2 className="title">Comments</h2>
      </div>
    </div>
  </div>
);

export default Comments;