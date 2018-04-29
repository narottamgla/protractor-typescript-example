import { browser, element, by, ExpectedConditions } from 'protractor';

/**
 * Class representing generic page.
 * Methods/properties for global elements should go here. 
 * 
 * @export
 * @class BasePage
 */
export class BasePage {
  constructor() {}

    singUpButton() {
        return element(by.css('div a.margin-0.btn.btn-info:nth-child(3)'));
    }

    loginButton(){
        return element(by.css('div a.margin-0.btn.btn-info:nth-child(2)'));
    }
}
