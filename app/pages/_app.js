import { useEffect } from 'react';
import { useStore, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Layout from '@/components/layouts/Layout';
import Alert from '@/components/modules/Alert';
import Loader from '@/components/elements/Loader';
import setAuthorizationToken from '@/utils/setAuthorizationToken';
import { refreshToken } from '@/store/actions/authActions';
import { wrapper } from '@/store/store';

import '../styles/main.scss';

//withRedux wrapper that passes the store to the App Component
const MyApp = ({ Component, pageProps }) => {
    const store = useStore();
    const { loading: loadingUser, token } = useSelector(state => state.auth);
    // Check if the user is authenticated.
    useEffect(() => store.dispatch(refreshToken()), []);
    // Set axios object authorization header
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

MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};
    return { pageProps };
};

export default wrapper.withRedux(MyApp);
