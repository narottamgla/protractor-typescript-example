import {browser, element, by, ExpectedConditions} from 'protractor';
import {BasePage} from "./basePage.po";

/**
 * Class representing generic page.
 * Methods/properties for global elements should go here.
 *
 * @export
 * @class loginPage
 */
export class loginPage extends BasePage{

    loginPageHeader() {
        return element(by.xpath('.//*[@id=\'validate-form\']/h2[1]'));
    }

    userNameTextBox() {
        return element(by.id('user_email'));
    }

    userPasswordTextBox() {
        return element(by.id('user_password'));
    }

    loginSubmitButton() {
        return element(by.id('submit'));
    }

    /**
     * Opens global header's Institutional Sign In modal and
     * signs in using specified username/password.
     *
     * @param {string} username Username to login as
     * @param {string} password Password to login as
     */
    login(loginData) {
        const usernameInput = element(by.id('user_email'));
        const passwordInput = element(by.id('user_password'));
        const submitButton = element(by.id('submit'));
        usernameInput.sendKeys(loginData.username);
        passwordInput.sendKeys(loginData.password);
        submitButton.click();
    }

    /**
     * Navigates browser to a page on Xplore,
     * using baseUrl from params passed in.
     * Should use relative URL (eg '/Xplore/home.jsp').
     *
     * @param {string} relativeUrl Path of URL after the host (eg '/Xplore/home.jsp').
     * @memberof BasePage
     */
    navigateTo(relativeUrl: string) {
        browser.get(browser.params.baseUrl + relativeUrl);
    }
}
