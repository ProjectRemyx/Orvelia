import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.scss';

import NavbarPage from './components/layout/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavbarPage/>
        </Router>
      </div>
    )
  }
}

export default App;