import React, { useEffect } from 'react';

const AdBanner = () => {
    useEffect(() => {
        // Ensure the script is only loaded once
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = `
            var atOptions = {
                'key' : 'ca882b8f9675db99714edbd06d2a4ebc',
                'format' : 'iframe',
                'height' : 50,
                'width' : 320,
                'params' : {}
            };
        `;
        document.head.appendChild(script);

        const adScript = document.createElement('script');
        adScript.type = 'text/javascript';
        adScript.src = '//www.topcreativeformat.com/ca882b8f9675db99714edbd06d2a4ebc/invoke.js';
        document.body.appendChild(adScript);

        return () => {
            // Clean up: remove the scripts when the component is unmounted
            document.head.removeChild(script);
            document.body.removeChild(adScript);
        };
    }, []);

    return (
        <div id="adsterra-ad-container">
            {/* Placeholder for ad content if needed */}
        </div>
    );
};

export default AdBanner;
