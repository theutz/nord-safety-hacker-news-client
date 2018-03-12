import * as React from 'react';
//
import { Story } from '../../types';

export interface CommentProps {
  comment: Story;
}

class Comment extends React.Component<CommentProps> {
  render() {
    const { comment } = this.props;

    return (
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{comment.by}</strong>
            </p>
          </div>
        </div>
      </article>);
  }
}

export default Comment;