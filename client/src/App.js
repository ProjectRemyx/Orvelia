import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.scss';

import NavbarPage from './components/layout/Shared/Nav';
import Index from './components/layout/Index/Index';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavbarPage/>
          <Index/>
        </Router>
      </div>
    )
  }
}

export default App;