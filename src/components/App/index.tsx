import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
//
import MainContent from '../MainContent';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar">
            <div className="navbar-brand">
              <div className="navbar-item">
                <Link to="/">Hacker News</Link>
              </div>
            </div>
          </nav>
          <section className="section">
            <Route path="/" component={MainContent} />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
