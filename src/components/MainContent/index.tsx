import * as React from 'react';

class MainContent extends React.Component<object, object> {
  render() {
    const props = this.props;

    return <section className="section" {...props} />;
  }
}

export default MainContent;