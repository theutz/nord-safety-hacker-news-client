import * as React from 'react';
//
import Section from '../Section';

class App extends React.Component {
  render() {
    return (
      <Section>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        </div>
      </Section>
    );
  }
}

export default App;
