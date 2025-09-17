import React from 'react';

const FacebookMVP = () => {
    const shareOnFacebook = () => {
        const url = window.location.href;
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(facebookShareUrl, '_blank');
    };

    return (
        <button onClick={shareOnFacebook}>
            Share on Facebook
        </button>
    );
};

export default FacebookMVP;
