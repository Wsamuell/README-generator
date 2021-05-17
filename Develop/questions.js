const generateMarkdown = require("./utils/generateMarkdown");

const readmeQuestions = [
    {
        type: "input",
        name: "name",
        message: "What's your Full Name?",
        validate: (value) => {
            if (value) { return true }
            else { return "Name Required" }
        }
    },
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
            "MIT",
            "Mozilla_Public",
            "GNU_AGPLv3",
            "GNU_GPLv3",
            "GNU_LGPLv3",
            "Apache_2.0",

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
]

module.exports = readmeQuestions;
