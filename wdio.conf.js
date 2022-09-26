const { join } = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.cy.js',
        './test/screens/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "ebac-qe",
        "automationName": "UiAutomator2",
        "appPackage": "com.woocommerce.android",
        "appActivity": "ui.main.MainActivity",
        "app": join(process.cwd(), './app/android/loja-ebac.apk' ),
        "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity' 
    }],
    waitForTimeout: 40000,
    mochaOpts: {
        timeout: 300000
    },
    reporters: ['spec']
    
}
