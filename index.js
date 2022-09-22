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
        message: "What are your contribution guidelines to your Repo?"
    },
    {
        type: "input",
        name: "tests",
        message: "What tests are there for your Repo?"
    },
    {
        type: "input",
        name: "githubP",
        message: "Enter your GitHub profile name."
    },
    {
        type: "input",
        name: "githubL",
        message: "Enter your Github profile link."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email you would like to be contacted at."
    },
    {
        type: "input",
        name: "questions",
        message: "Instructions for reaching you about questions for your repo?"
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
        
[Click here for deployed page](${answers.link})
        
![Screenshot of page](${answers.pic})

## Table of Contents
1. [About](#about)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## About
${answers.description}

## Installation
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
[${answers.githubP}](${answers.githubL})

${answers.email}

${answers.questions}


        `;
        console.table(answers);
        writeToFile("generatedREADME.md", readMeText)
    })
}

// Function call to initialize app
init();
