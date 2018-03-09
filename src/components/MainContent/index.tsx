import * as React from 'react';
import { Route } from 'react-router-dom';
//
import BestStories from '../BestStories';

class MainContent extends React.Component<object, object> {
  render() {
    const props = this.props;

    return (
      <section className="section" {...props}>
        <Route path="/" component={BestStories} />
      </section>
    );
  }
}

export default MainContent;