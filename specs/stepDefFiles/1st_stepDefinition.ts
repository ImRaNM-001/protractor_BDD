// Note: 1 step definition file can have multiple .feature files ==> 1stepdefinition -> 1.feature, 2.feature, 3.feature
// import {browser} from '../../node_modules/protractor';
import {browser} from 'protractor';
import {GmailHomePage} from '../../pages/gmailHomePage';
const ghp : GmailHomePage = new GmailHomePage();

const {Given, When, Then} = require('cucumber'),       // or, import {Before, Given, Then, When} from 'cucumber';
expect = require('chai').expect;                        // or, import {expect} from 'chai';

// 1st scenario
Given(/^Open the google homePage$/, async () =>{
   return browser.get(params.baseUrl);
} );

// without using 'return' statement
// Given('Open the google homePage', async () => browser.get(params.baseUrl);
// );


When('Hit the gmail urlLink', () =>{
    // return $('=Gmail').click();                  // this code doesn't work hence try below one
    ghp.gmailLink.click(); 
} );


Then('Verify the page title of gmail loginPage', async () =>{
    const pageTitle : string = await browser.getTitle();

    console.log('The title of gmail loginPage is: ', pageTitle);
    expect(pageTitle).to.equal('Gmail - Email from Google');      // should print true
} );


// 2nd scenario
Then('Verify sum of all elements of the array', async () => {
    const numArr : number[] = [10, 20, 30, 40];
    // const numArr: Array<number> = [10, 20, 30, 40];          // 2nd way to intilaize number array
    let sum : number = 0, index : number;
    for(index of numArr) sum += numArr[index];
    console.log(sum);
    expect(sum).to.equal(100);
} );







