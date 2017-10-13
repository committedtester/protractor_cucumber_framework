var BrowserHelper = function() {
    this.navigateToURL =function(URL) {
        return browser.get(URL);
    };

    this.browserWaitForURL = function (expectedURL, timeout) {
        var EC = browser.ExpectedConditions;
        browser.wait(EC.urlContains(expectedURL), timeout); // Checks that the current URL contains the expected text
        return browser.wait(EC.urlIs(expectedURL), timeout); // Checks that the current URL matches the expected text
    };

};

module.exports = new BrowserHelper();
