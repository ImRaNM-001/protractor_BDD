// Note: 1 step definition file can have multiple .feature files ==> 1stepdefinition -> 1.feature, 2.feature, 3.feature

const {Given, When, Then} = require ('cucumber');
const expect = require('chai').expect;

// 1st scenario
Given('Open the google homePage', async () => {
   return browser.get(params.baseUrl);
} );

When('Hit the gmail urlLink', async () => {
    return $('=Gmail');
} );


Then('Verify the page title of gmail loginPage', async () => {
    const pageTitle: string = await browser.getTitle();
    console.log('The title of gmail loginPage is: ', pageTitle);
    await expect(pageTitle).to.equal('Gmail - Email from Google');      // should print true
} );


// 2nd scenario
Then('Verify sum of all elements of the array', async () => {
    const numArr: number[] = [10, 20, 30, 40];
    // const numArr: Array<number> = [10, 20, 30, 40];          // both way is correct
    let sum: number = 0, index: number;
    for(index of numArr){
        sum += numArr[index];
    }
    console.log(sum);
    expect(sum).to.equal(90);
} );
















