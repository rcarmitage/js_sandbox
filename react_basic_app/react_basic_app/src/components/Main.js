import React, { Component } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import TestPage from './TestPage';
import ErrorPage from './ErrorPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test-page" component={TestPage} />
          <Route component={ErrorPage} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;