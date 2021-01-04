import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Tours from './containers/Tours';
import TourDetails from './containers/TourDetails';
import Login from './containers/Login';
import Account from './containers/Account';
import Layout from './components/Layout';

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path='/tour/:slug' component={TourDetails} />
                    <Route exact path='/' component={Tours} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/me' component={Account} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
