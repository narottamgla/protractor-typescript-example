import {browser, element, ExpectedConditions, by} from 'protractor';
import {loginPage} from './../../pages/loginPage.po';
import {registrationPage} from './../../pages/registerPage.po';
import {dataProvider} from "../../data/dataProvider";

describe('User registration', () => {
    const registrationData = require('../../../data/registration.json');
    const loginPg = new loginPage();
    const registrationPg = new registrationPage();

    beforeEach(() => {
        browser.waitForAngularEnabled(false);
    });

    it('should not able to register with invalid details', (done) => {
        loginPg.navigateTo('/');
        loginPg.loginButton().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Not able to navigate to application home page');
            loginPg.loginButton().click().then(function () {
                loginPg.loginPageHeader().isDisplayed().then(function (pre) {
                    expect(dis).toBe(true, 'Application login page is not displaying');
                    registrationPg.singUpButton().click().then(function () {
                        registrationPg.registerUser(registrationData.registration);
                        expect(registrationPg.alertMessage().isDisplayed()).toBe(true, 'Validation error is not displaying');
                        done();
                    })
                });
            });
        });
    })
});