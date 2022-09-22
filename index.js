// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

const { default: Choices } = require("inquirer/lib/objects/choices");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your Repo?"
    },
    {
        type: "input",
        name: "link",
        message: "Enter the link to your page or repo."
    },
    {
        type: "input",
        name: "pic",
        message: "Link gif or screenshot of your page or code here."
    },
    {
        type: "input",
        name: "description",
        message: "What is a description of your Repo?"
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "Input the Table of Contents for your Repo."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your Repo?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the useage for your Repo?"
    },
    {
        type: "list",
        name: "license",
        message: "How is your Repo licensed?",
        choices: ["MIT", "WTFPL", "GPL", "CC", "MPL"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to your Repo?"
    },
    {
        type: "input",
        name: "tests",
        message: "What tests are there for your Repo?"
    },
    {
        type: "input",
        name: "questions",
        message: "What are any questions?"
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
    })
};

// TODO: Create a function to initialize app
function init() {
    console.log("hi");
    inquirer.prompt(questions).then(function(answers){
        
let readMeText = `# ${answers.title}
        
${answers.link}
        
${answers.pic}
        
## About
${answers.description}

## Table of Contents
${answers.tableOfContents}

## Installation Instructions
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.questions}


        `;
        console.table(answers);
        writeToFile("generatedREADME.md", readMeText)
    })
}

// Function call to initialize app
init();
