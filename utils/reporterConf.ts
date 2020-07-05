import * as reporter from 'cucumber-html-reporter';
import * as fs from 'fs';     // file system library to access the physical file system (i.e, allows us to work with the file system on our computer)
import * as mkdirp from 'mkdirp';
import * as path from 'path';

const jsonReports = path.join(process.cwd(), '/reports'),           // as per node js doc process.cwd(), cwd() is a method of global object process which doesn't accept any parameters but returns a string value specifying the current working directory of the Node.js process

htmlReports = path.join(process.cwd(), '/reports'),
targetJson = jsonReports + '/cucumber_report.json',

cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + '/cucumber_report.html',
    reportSuiteAsScenarios: true,
    theme: 'bootstrap',
};

export class Reporter{

    public static createDirectory(dir : string){
        if(!fs.existsSync(dir)) mkdirp.sync(dir);
    }

    public static createHTMLReport(){
        try{
            reporter.generate(cucumberReporterOptions);         // invoke cucumber-html-reporter
        }      // try block closed
        catch(err){
            if(err) throw new Error('Failed to save cucumber test results to json file');
        }      // catch block closed
    }   // fn() closed
}          // class closed here
