import {browser, element, by, ExpectedConditions, protractor, ElementFinder} from 'protractor';

/**
 * Utility class for commonly called Protractor.browser methods.
 * The methods should be static and
 * not require new instance of class to use.
 *
 * @export
 * @class BrowserUtil
 */
export class BrowserUtil {
    constructor() {
    }

    /**
     * Returns true, if element displayed
     * Max timeout for wait: 1200000 second`.
     *
     * @static
     * @memberof BrowserUtil
     */
    static waitUntilReady = function (elm) {
        browser.wait(function () {
            return elm.isPresent();
        }, 1200000);
        browser.wait(function () {
            return elm.isDisplayed();
        }, 1200000,);
    };
    static waitUntilNotInDom = function (locator) {
        var EC = protractor.ExpectedConditions;
        browser.wait(function () {
            return EC.stalenessOf(locator);
        }, 600000);
        browser.wait(function () {
            return EC.invisibilityOf(locator);
        }, 600000);
    };

    /**
     * Returns environment the test suite is executed on
     * by checking `browser.params.baseUrl`.
     *
     * @static
     * @returns {Environment}
     * @memberof BrowserUtil
     */
    static getEnv(): Environment {
        const baseUrl = browser.params.baseUrl;

        if (baseUrl.indexOf('qaenvurl') != -1) {
            return Environment.QA;
        } else if (baseUrl.indexOf('prodenvurl') != -1) {
            return Environment.PROD;
        } else {
            return Environment.LOCAL;
        }
    }
}

/**
 * Enum for different types of environment this test suite
 * is running on.
 *
 * @export
 * @enum {string}
 */
export enum Environment {
    QA = 'qa',
    PROD = 'prod',
    LOCAL = 'local'
}
