Fundix Mobile App – E2E Test Suite

This project contains end-to-end tests for the Fundix Mobile App using WebdriverIO, Appium Javascript, and Mocha.
The tests simulate real user actions such as login, opening and closing positions, and logout.

Installation

1. Clone the repository:

git clone <repo-url>
cd <repo-folder>

2. Install dependencies:

npm install

3. Start the Appium server:

appium

4. Run E2E test command:

npx wdio run wdio.conf.js
   

The main configuration file is wdio.conf.js.

Key Options:

platformName: Android

automationName: UiAutomator2

appPackage and appActivity: specify the app under test

noReset: keeps the app state between tests

newCommandTimeout: 120 seconds – max idle time for the session

adbExecTimeout, uiautomator2ServerLaunchTimeout, uiautomator2ServerInstallTimeout: increase stability of the Appium session
