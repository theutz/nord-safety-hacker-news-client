import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
//
import MainContent from '../MainContent';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar is-primary">
            <div className="container">
              <div className="navbar-brand">
                <div className="navbar-item">
                  <Link to="/" className="has-text-white">Hacker News</Link>
                </div>
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
