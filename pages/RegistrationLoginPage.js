var OR = require('../json/objectRepository.json');

var RegistrationLoginPage = function() {
    this.userName =element(by.id(OR.registrationLogin.userName));
    this.password =element(by.id(OR.registrationLogin.password));
    this.userName2ndField=element(by.model(OR.registrationLogin.userName2ndField));
    this.loginButton=element(by.css(OR.registrationLogin.loginButton));

    this.enterUserName = function(userNameText) {
        return this.userName.sendKeys(userNameText);
    };

    this.enterPassword = function(passwordText) {
        return this.password.sendKeys(passwordText);
    };
    this.enterUserName2ndField =function(userNameText) {
        return this.userName2ndField.sendKeys(userNameText);
    };
    this.clickLoginButton=function() {
        return this.loginButton.click();
    };
    };

    module.exports = new RegistrationLoginPage();
