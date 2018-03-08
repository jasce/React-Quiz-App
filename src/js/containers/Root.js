import React from 'react';
import { ReactDOM } from 'react-dom';
import { Provider } from 'redux';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from '../components/Home';
import Quiz from '../components/Quiz';

const history = createBrowserHistory();


const Root = () => (
        <div id="root">
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/quiz" component={Quiz}/>
                </div>
            </Router>
        </div>
);

export default Root;