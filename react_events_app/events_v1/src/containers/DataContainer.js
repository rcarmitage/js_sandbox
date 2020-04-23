import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import DataRenderPage from '../components/DataRenderPage';
import ErrorPage from '../components/ErrorPage';

class DataContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exampledata: []
    }
  }

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

export default DataContainer;