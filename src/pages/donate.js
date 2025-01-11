import React, { useEffect } from 'react';

const DonateRedirect = () => {
    useEffect(() => {
        const currentUrlParams = window.location.search;
        const redirectUrl = `https://harry.karing.app/donate${currentUrlParams}`;

        window.location.href = redirectUrl;
    }, []);

    return <div>redirecting...</div>;
};

export default DonateRedirect;
