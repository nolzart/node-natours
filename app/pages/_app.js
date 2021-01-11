// import App from 'next/app';
import { useEffect } from 'react';
import { useStore, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Layout from '../components/Layout/Layout';
import { wrapper } from '../store/store';
import { refreshToken } from '../store/actions/authActions';
import setAuthorizationToken from '../utils/setAuthorizationToken';

//withRedux wrapper that passes the store to the App Component
const MyApp = props => {
    const { Component, pageProps } = props;
    const store = useStore();
    const { loading: loadingUser, token } = useSelector(state => state.auth);

    useEffect(() => store.dispatch(refreshToken()), []);
    useEffect(() => setAuthorizationToken(token), [token]);
    return (
        <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
            {!loadingUser ? (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            ) : null}
        </PersistGate>
    );
};

// MyApp.getInitialProps = async ({ store }) =>
//     await store.dispatch(refreshToken());

export default wrapper.withRedux(MyApp);
