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
        <div className="media-left">
          <span className="icon has-text-info"><i className="fas fa-comment fa-lg" /></span>
        </div>
        <div className="media-content">
          <strong className="has-text-grey">{comment.by}</strong>
          <div className="content" dangerouslySetInnerHTML={{ __html: comment.text }} />
        </div>
      </article>);
  }
}

export default Comment;