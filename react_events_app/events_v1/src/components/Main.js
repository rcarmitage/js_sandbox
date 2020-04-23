import React, { Component } from 'react';
import NavBar from './NavBar';
import Home from '../components/Home';
import DataRenderPage from '../components/DataRenderPage';
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
          <Route exact path="/data-render-page" component={DataRenderPage} />
          <Route component={ErrorPage} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;