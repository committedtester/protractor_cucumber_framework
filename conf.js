exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Spec patterns are relative to this directory.
    specs: [
      './features/*.feature'
    ], 
  
    resultJsonOutputFile: 'test_results/protractor.json',

    cucumberOpts: {
      require: ['./features/step_definitions/*steps.js',
      './common.js'
    ] 
    }
  };