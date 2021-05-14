// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const writeToFile = (fileName, data) => {
    fs()
}


// TODO: Create an array of questions for user input
inquirer.prompt(
    {
        type: "input",
        name: "github",
        message: "Please enter your Github Username",
        validate: (value) => {
            if (value) { return true }
            else { return "Github Username Required" }
        }
    },

    {
        type: "input",
        name: "email",
        message: "What is your professional email?",
    },
    {
        type: "input",
        name: "repository",
        message: "What is the github link to this project?",
        validate: (value) => {
            if (value) { return true }
            else { return "Github repository Required" }
        }
    },

    {
        type: "input",
        name: "title",
        message: "What is the name of your project",
        validate: (value) => {
            if (value) { return true }
            else { return "title Required" }
        }
    },
    {
        type: "input",
        name: "description",
        message: "How would you Describe this project?",
        validate: (value) => {
            if (value) { return true }
            else { return "project description Required" }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation requirement and instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide information on project usage?",
        validate: (value) => {
            if (value) { return true }
            else { return "usage Required" }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Provide license information & documentation",
        choices: [
            "MIT License",
            "Unlicensed",
            "Mozilla Public License",
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache License 2.0",
            "Boost software License"

        ]
    },
    {
        type: "checkbox",
        name: "programs",
        message: "Programs and languages used to create this project?",
        choices: [
            'HTML',
            'CSS',
            'JavaScript',
            'Node'
        ]
    },


)
    .then(({
        github,
        email,
        repository,
        title,
        description,
        installation,
        usage,
        license,
        programs,
    }) => {
        const template = `# ${title}
    
    ## Repository link
    ${repository}

    ### Description
    ${description}
    ### Purpose and Usage
    ${usage}
    ### Programs Used
    ${programs}

    ### Installation Required
    ${installation}
    ### License
    ${license}

    ### Contact Information
    ### Github: https://github.com/users/${github}
    #### Email: ${email}
    `;
        writeToFile(title, template);
    });

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile("fileName.md", data, (err) =>{
        if (err) {
            console.log(err)
        };
        console.log ('The file has been generated and saved');
    })
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
