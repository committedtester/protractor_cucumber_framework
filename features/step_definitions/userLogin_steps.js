var browserHelper = require('../../nonPageFunctions/BrowserHelper');
var elementHelper = require('../../nonPageFunctions/ElementHelper');
var testData = require('../../json/testData.json');
var registrationLoginPage = require('../../pages/RegistrationLoginPage');
var homePage = require('../../pages/HomePage');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({  Given,  When,  Then}) {

  Given(/^I load the login page$/, function () {
    browserHelper.navigateToURL(testData.way2automation.entryURL);
    return browserHelper.browserWaitForURL(testData.way2automation.validationURL);
  });

  When(/^I enter username as "(.*?)"$/, function (userName) {
    return registrationLoginPage.enterUserName(userName);
  });

  When(/^I enter password as "(.*?)"$/, function (passWord) {
    return registrationLoginPage.enterPassword(passWord);
  });

  When(/^I enter username2 as "(.*?)"$/, function (userName2) {
    return registrationLoginPage.enterUserName2ndField(userName2);
  });

  When(/^I click Login$/, function () {
    return registrationLoginPage.clickLoginButton();
  });

  Then(/^I should see the "(.*?)" page$/, function (page) {
    console.log('The variable from cucumber is '+page);
    return browserHelper.browserWaitForURL(testData.way2automation.loggedInURL);
  });

  Then(/^Helper text should be displayed$/, function () {
    return elementHelper.validateText(homePage.loggedInLabel, 'You\'re logged in!!');
  });
});