var OR = require('../json/objectRepository.json');

var HomePage = function() {
        this.loggedInLabel =element(by.css(OR.home.loggedInLabel));
        this.logOutLink = element(by.css(OR.home.logOutLink));

        this.clickLogOutLink = function() {
                return this.logOutLink.click();
        };
        
        };

module.exports = new HomePage();
