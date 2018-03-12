import * as React from 'react';
import { AxiosResponse } from 'axios';
//
import { Story, Stories } from '../../types';
import client, { all, spread } from '../../client';
//
import Spinner from '../Spinner';
import Comment from '../Comment';

export interface CommentsProps {
  story?: Story;
}

export interface CommentsState {
  comments?: Stories;
}

class Comments extends React.Component<CommentsProps, CommentsState> {
  constructor(props: CommentsProps) {
    super(props);

    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    const { story } = this.props;

    if (!story) {
      return;
    }

    all(story.kids.map(
      (k: number) => client.get(`/item/${k}.json`)
    )).then(spread((...args: AxiosResponse<object>[]) => {
      this.setState({ comments: args.map(a => a.data as Story) });
    }));
  }

  render() {
    const { story } = this.props;
    const { comments } = this.state;

    return (
      <div className="container">
        {!!story ?
          <React.Fragment>
            <div className="columns">
              <div className="column">
                <h2 className="title is-spaced"><a href={story.url} target="_blank">{story.title}</a></h2>
                <h3 className="subtitle has-text-grey">{story.score} points by {story.by}</h3>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                {!!comments && comments.length > 0
                  ? comments.map((comment) =>
                    <Comment key={comment.id} comment={comment} />)
                  : <Spinner />}
              </div>
            </div>
          </React.Fragment>
          : <Spinner />
        }
      </div>
    );
  }
}

export default Comments;