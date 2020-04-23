import React, { Component } from 'react';
import NavBar from './NavBar';
import Home from '../components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Switch>
          <Route exact path="/" component={Home} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;