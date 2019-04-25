import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1 className="header">React Custom Boilerplate</h1>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
