/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/

// import {browser, Config} from "protractor";
// import * as path from "path";

export const config: Config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    getPageTimeout: 50000,
    allScriptsTimeout: 50000,
  
    params: {
    baseUrl: 'https://www.google.com/ncr'
    }

    capabilities: {
        browserName:'chrome'
    },
  
    framework: 'custom',  // set to "custom" instead of cucumber.  
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  
    specs: ['./specs/cucumber/featureFiles/*.feature'],     // specs here are the cucumber feature files    
  
    // cucumber command line options
    cucumberOpts: {
      require: ['./specs/cucumber/stepDefinition.ts'],  // require step definition files before executing features
      tags: false,
    // tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
      strict: true,                  // <boolean> fail if there are any undefined or pending steps
      format: ["pretty"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
      'dry-run': false,              // <boolean> invoke formatters without executing steps
      compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    },
  
   onPrepare: () => {
      browser.manage().window().maximize(); // maximize the browser before executing the feature files
      browser.ignoreSynchronization = true;  
    }
};