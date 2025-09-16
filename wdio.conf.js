exports.config = {
  runner: "local",
  specs: ["./tests/**/*.js"],
  maxInstances: 1,
  capabilities: [
    {
      platformName: "Android",
      "appium:platformVersion": "14",
      "appium:deviceName": "ZY22K2K5LJ",
      "appium:automationName": "UiAutomator2",
      "appium:appPackage": "com.amega.fundix",
      "appium:appActivity": "com.amega.fundix.MainActivity",
      "appium:noReset": true,
      "appium:newCommandTimeout": 120,
      "appium:adbExecTimeout": 5000,
      "appium:uiautomator2ServerLaunchTimeout": 5000,
      "appium:uiautomator2ServerInstallTimeout": 5000,
    },
  ],
  logLevel: "info",
  waitforTimeout: 5000,
  connectionRetryCount: 5,
  framework: "mocha",
  mochaOpts: {
    timeout: 60000,
  },
  services: ["appium"],
  appium: {
    command: "appium",
  },
};
