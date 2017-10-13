# Protractor Disclaimer
* My second protractor based framework. 
* Compatible with CucumberJS 2.0.0+ Syntax (tested with 3.0.3)

# To replicate locally
* Install node.js
* Install npm
* Configure Environment Variables to access protractor globally C:\Users\<USERNAME>\AppData\Roaming\npm
* npm install (based on the package.json)

* webdriver-manager start
* if this fails, try webdriver-manager update
* Validate server status via http://localhost:4444/wd/hub/static/resource/hub.html

# To Execute
* protractor conf.js 
* or
* npm test