// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readMeTemplate = require('./scripts/generateMarkdown');
const readmeQuestions = require('./scripts/questions')


// creating the file using fs
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        //     console.log(err)
        // }
        console.log('The file has been generated and saved');
    })
}

// TODO: Create a function to initialize app
function init() {inquirer.prompt(readmeQuestions)
    .then((
        answers
    ) => {
        const markdownData = readMeTemplate(answers);

        // createReadMe(title, template);
        writeToFile("README.md", markdownData)
    });}

// Function call to initialize app
init();


