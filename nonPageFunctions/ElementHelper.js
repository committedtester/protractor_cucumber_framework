var ElementHelper = function () {
    this.validateText = function (elementIdentifier, expectedText) {
        return elementIdentifier.getText().then(function (text) {
            console.log(text + 'ProtractorHelperFunctions');
            expect(text).to.equal(expectedText);
        });
    };
    
};



module.exports = new ElementHelper();