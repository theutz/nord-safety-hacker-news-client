import * as React from 'react';
//
import { Story, Stories } from '../../types';
import client, { all, spread } from '../../client';
import Spinner from '../Spinner';

export interface CommentProps {
  comment: Story;
}

export interface CommentState {
  subcomments?: Stories;
}

class Comment extends React.Component<CommentProps, CommentState> {

  constructor(props: CommentProps) {
    super(props);

    this.state = {
      subcomments: [],
    };
  }

  componentDidMount() {
    const { comment } = this.props;

    if (!comment || !comment.kids || comment.kids.length === 0) {
      return;
    }

    all(comment.kids.map(k => client.get(`/item/${k}.json`)))
      .then(spread((...args) => {
        this.setState({ subcomments: args.map(a => a.data as Story) });
      }));
  }

  render(): JSX.Element {
    const { comment } = this.props;
    const { subcomments } = this.state;

    return (
      <article className="media">
        <div className="media-left">
          <span className="icon has-text-info"><i className="fas fa-comment fa-lg" /></span>
        </div>
        <div className="media-content">
          <strong className="has-text-grey">{comment.by}</strong>
          <div className="content" dangerouslySetInnerHTML={{ __html: comment.text }} />
          {!!comment && !!comment.kids && comment.kids.length > 0
            ? !!subcomments && subcomments.length > 0
              ? subcomments.map(s => <Comment key={s.id} comment={s} />)
              : <Spinner size="sm" />
            : false}
        </div>
      </article>);
  }
}

export default Comment;