import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Tours from './containers/Tours';
import Layout from './components/Layout';

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact paht='/' component={Tours} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
