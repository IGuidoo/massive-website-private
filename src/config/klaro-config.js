var klaroConfig = {
    // This is a unique name for this consent manager configuration
    cookieName: 'klaro',

    // You can customize the cookies Klaro uses
    cookieDomain: '.vercel.app',

    // This will be the language your users will see the consent banner in.
    default: 'en',

    // List of third-party apps/trackers you want to manage with Klaro
    apps: [
        {
            name: 'googleAnalyticsGTag',
            default: false,
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [/^_ga/, /^_gid/, /^_gat/, /^_gac_/], // Google Analytics cookies
            callback: function(consent, app) {
                if (consent) {
                    // Load the gtag.js script
                    var gtagScript = document.createElement('script');
                    gtagScript.async = true;
                    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-BNZ6YBWJVS";
                    document.body.appendChild(gtagScript);
        
                    // Initialize gtag
                    window.dataLayer = window.dataLayer || [];
                    window.gtag = function(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-BNZ6YBWJVS');
                }
            },
            required: false,
        },
        

        // Add more apps/trackers here...
    ],
};

export default klaroConfig;