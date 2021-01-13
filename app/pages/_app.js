// import App from 'next/app';
import { useEffect } from 'react';
import { useStore, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Layout from '../components/Layout/Layout';
import { wrapper } from '../store/store';
import Alert from '../components/Alert';
import Loader from '../components/Loader';
import { refreshToken } from '../store/actions/authActions';
import setAuthorizationToken from '../utils/setAuthorizationToken';

import '../styles/main.scss';

//withRedux wrapper that passes the store to the App Component
const MyApp = props => {
    const { Component, pageProps } = props;
    const store = useStore();
    const { loading: loadingUser, token } = useSelector(state => state.auth);

    useEffect(() => store.dispatch(refreshToken()), []);
    useEffect(() => setAuthorizationToken(token), [token]);
    return (
        <PersistGate persistor={store.__persistor} loading={null}>
            {!loadingUser ? (
                <Layout>
                    <Alert />
                    <Component {...pageProps} />
                </Layout>
            ) : (
                <Loader />
            )}
        </PersistGate>
    );
};

// MyApp.getInitialProps = async ({ store }) =>
//     await store.dispatch(refreshToken());

export default wrapper.withRedux(MyApp);
