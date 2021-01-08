import App from 'next/app';
import { ReactReduxContext } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Layout from '../components/Layout/Layout';
import { wrapper } from '../store/store';

//withRedux wrapper that passes the store to the App Component
class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <ReactReduxContext.Consumer>
                {({ store }) => (
                    <PersistGate
                        persistor={store.__persistor}
                        loading={<div>Loading</div>}
                    >
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </PersistGate>
                )}
            </ReactReduxContext.Consumer>
        );
    }
}

export default wrapper.withRedux(MyApp);
