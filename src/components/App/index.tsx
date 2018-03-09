import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
        </div>
      </Router>
    );
  }
}

export default App;
