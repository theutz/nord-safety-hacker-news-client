import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps {
}

class Navbar extends React.Component<NavbarProps, object> {
  render() {
    return (
      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Link to="/" className="has-text-white">Hacker News</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;