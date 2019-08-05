import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.scss';

import NavbarPage from './components/layout/Shared/Nav';
import Footer from './components/layout/Shared/Footer';

import { ContextController } from './context';

import Index from './components/layout/Index/Index';
import Heroes from './components/layout/Heroes/Heroes';
import Knights from './components/layout/Heroes/Knights/Knights';

class App extends Component {
  render() {
    return (
      <div>
        <ContextController>
          <Router>
            <NavbarPage/>
            <Switch>
              <Route exact path="/" component={Index}/>
              <Route exact path="/Heroes" component={Heroes}/>
              <Route exact path ="/Heroes/Knights" component={Knights}/>
            </Switch>
            <Footer/>
          </Router>
        </ContextController>
      </div>
    )
  }
}

export default App;