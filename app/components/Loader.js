import React, { useEffect } from 'react';

const Loader = () => {
    useEffect(() => {
        document.querySelector('body').classList.add('ov-hidden');
        return () =>
            document.querySelector('body').classList.remove('ov-hidden');
    });
    return (
        <div className='lds-ring'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;
