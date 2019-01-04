# Typescript Protractor Project Example
This project is an example of what a Typescript Protractor project could look like. I couldn't find very fleshed out examples so decided to put up what I have written for work, in case it helps anyone. All sensitive information (eg logins and URLs) have been removed/replaced with dummy data.

Feel free to modify and use it for your own purposes with no restrictions.

Based on Protractor team's [example Typescript project](https://github.com/angular/protractor/tree/master/exampleTypescript), Angular-CLI generated project, and [qualityshepherd's example page object project](https://github.com/qualityshepherd/protractor-example).

## Project Description:
* Project setup with Protractor version 5.1.2.
* Makes use of Page Objects.
* Written in Typescript, compiled to ES5 Javascript.
* Page Object classes are in the `./pages` directory and should inherit from `basePage.po`.
* Specs scripts are in the `./specs` directory, grouped into directory by page or functionality.
* Mock data (eg usernames and pws) are in `./data` directory.
* Utility functions are in `./utils` directory. 
* If changing file names or deleting files, delete the `tmp` directory, which contains previously compiled Typescript files. It only updates existing files/adds new ones and doesn't delete ones that don't exist in Typescript anymore. 

## Setup:
* Install [Node](http://nodejs.org) (v6.x.x or later)
* Follow setup steps described [here](http://www.protractortest.org/#/tutorial#setup)
* `npm install` to install the project dependencies
* 'npm install protractor -g' to install protractor globally
* Now install selenium standalone- `webdriver-manager update`
* In a separate command line window, run `webdriver-manager start` and keep it running.

## Run tests:
* `npm run test` or `npm run test-qa` - Run QA env tests. Defaults to using Chrome browser.
* `npm run test-prod` - Run Production env tests.
* `npm run test-qa-cross` - Runs cross-browser (Chrome and Firefox) QA env tests.
* `npm run test-prod-cross` - Run cross-browser (Chrome and Firefox) Production env tests.
* `tsc` then `protractor tmp/conf.js --params.baseUrl=http://localhost` - *For developers* Run local env tests. Make sure local environment is up and running.

## Troubleshooting
* run `node -v` and make sure your node version is 6.x.x or greater
* run `java -version` and make sure you have Java Development Kit (JDK) installed. 
* run `npm ls -g --depth=0` and make sure protractor@5.1.2 or later is installed as a global NPM package.
* Make sure you have a local instance of Selenium Server started. If not, run `webdriver-manager start`.
* run `webdriver-manager update` to make sure you have the latest Selenium webdrivers. 
* Delete the `./tmp` directory before running tests to ensure files are fresh.
* On Windows machines, sometimes Chrome browser will hang and seemingly not do anything when starting e2e scripts. Close it and rerun e2e tests.
