import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Component } from 'react';

class Main extends Component {

    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/test-page" component={TestPage} />
                </React.Fragment>
            </Router>
        )
    }

}