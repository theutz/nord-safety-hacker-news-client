import * as React from 'react';

export interface NavbarProps {
  onBrandClick: () => void;
}

class Navbar extends React.Component<NavbarProps, object> {
  render() {
    const { onBrandClick } = this.props;

    return (
      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <a
                onClick={e => {
                  e.preventDefault();
                  onBrandClick();
                }}
                className="has-text-white"
              >
                Hacker News
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;