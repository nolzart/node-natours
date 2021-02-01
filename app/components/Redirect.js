import React from 'react';
import { useRouter } from 'next/router';

import Loader from './Loader';

const Redirect = ({ shouldRedirect, path, children }) => {
    const router = useRouter();
    if (shouldRedirect) {
        router.replace(path);
        return (
            <>
                <Loader />
            </>
        );
    }
    return <>{children}</>;
};

export default Redirect;
