/*
Basic configuration to run your cucumber
feature files and step definitions with protractor      */

import * as path from 'path';
import {browser, Config} from 'protractor';     // or, import {browser, Config} from './node_modules/protractor';
import {Reporter} from './utils/reporterConf';

const jsonReports = process.cwd() + '/reports';

export const config : Config = {
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
  
  framework: 'custom',     // set to "custom" instead of cucumber.  
  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  
  specs: ['./specs/featureFiles/*.feature'],        // specs here are the cucumber feature files    
  
    // cucumber command line options
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: "json:./reports/cucumber_report.json",
    require: ['./JS/specs/stepDefFiles/*.js',     './JS/utils/reporterConf.js'],     // require step definition files before executing features

    strict: true,           // it will check if any step is not defined/undefined/pending/not written in step definition file, it will execute but fail the feature step and display code snippet at console
    tags: []              // tags are written in the feature file and if written those tags will be executed

    /* tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario",                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    
    compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)  
    
    format: ["pretty"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)           */
    
    // 'dry-run': false,              // to check if the mapping is proper between feature file and step def file (in other words check if any feature file steps like "Given", "When", "Then" have corrsponding step definition fns(), will not give error in report but won't display fn() name in console post test run)


  },
  
  onPrepare: () =>{
      browser.manage().window().maximize();     // maximize the browser before executing the feature files
      browser.ignoreSynchronization = true;  
  },

  onComplete: () =>{
        Reporter.createHTMLReport();
  },

};