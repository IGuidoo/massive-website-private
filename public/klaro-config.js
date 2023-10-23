var klaroConfig = {
    privacyPolicy: '/privacy.html',
    apps: [
        {
            name: 'google-analytics',
            default: true,
            title: 'Google Analytics',
            purposes: ['statistics'],
            cookies: [/^ga/i]
        }
        // ... potentially other apps or settings ...
    ]
};

