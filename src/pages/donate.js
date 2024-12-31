import React, { useEffect } from 'react';

const DonateRedirect = () => {
    useEffect(() => {
        window.location.href = 'https://harry.karing.app/donate';
    }, []);

    return <div>redirect...</div>;
};

export default DonateRedirect;
