const{devices} = require('@playwright/test');

const config = {
    workers:2,
    retires:2,
    use:{
        headless:false,
        viewport:{
            width:1280, height: 720},
        launchOptions:{
            slowMo: 1000,
        },
        video:"on",
        },
        projects:[{
            name:'Desktop Chromium',
            use:{
                browserName:'chromium',
            },
        },
            {
                name: 'Mobile Safari',
                use: devices['iPhone 12'],
            },
        ],
    };

    module.exports = config;