import {browser, element, by, ExpectedConditions} from 'protractor';
import {BasePage} from "./basePage.po";

/**
 * Class representing generic page.
 * Methods/properties for global elements should go here.
 *
 * @export
 * @class BasePage
 */
export class registrationPage extends BasePage{

    getRegistrationHeader() {
        return element(by.css('#validate-form h2:nth-child(1)'));
    }

    userTypeArtist() {
        return element(by.css('#uniform-user_type-0>span'));
    }

    userFirstName() {
        return element(by.id("user_first_name"));
    }

    userLastName() {
        return element(by.id("user_last_name"));
    }

    userEmail() {
        return element(by.id("user_email"));
    }

    userPassword() {
        return element(by.id("user_password"));
    }

    userConfirmPassword() {
        return element(by.id("user_rpassword"));
    }

    userAggrement() {
        return element(by.id("accept_aggrement"));
    }

    createUserButton() {
        return element(by.id("bttnsubmit"));
    }

    alertMessage() {
        return element(by.css(".alert.alert-error"));
    }

    /**
     * Opens global header's Institutional Sign In modal and
     * signs in using specified username/password.
     *
     * @param {string} username Username to login as
     * @param {string} password Password to login as
     */
    registerUser(firstName: string, lastName: string, email: string, password: string, cpassword: string) {
        this.userTypeArtist().click();
        this.userFirstName().sendKeys(firstName);
        this.userLastName().sendKeys(lastName);
        this.userEmail().sendKeys(email);
        this.userPassword().sendKeys(password);
        this.userConfirmPassword().sendKeys(cpassword);
        this.userAggrement().click();
        this.createUserButton().click();
    }
}
