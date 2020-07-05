// import {$, ElementFinder} from '../node_modules/protractor';
import {$, ElementFinder, element} from 'protractor';

export class GmailHomePage{    
    gmailLink : ElementFinder;

    constructor(){
        // this.gmailLink = $('=Gmail');                // works only in WDIO tool, hence written below code
        this.gmailLink = element(by.linkText('Gmail') );  
    }
}		                    // class closed
