import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//
import MainContent from '../MainContent';
import Navbar from '../Navbar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <MainContent />
          <section className="section">
            <Route path="/" component={MainContent} />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
