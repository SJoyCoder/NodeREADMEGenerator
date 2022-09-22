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
        choices: ["MIT", "WTFPL", "GPL", "MPL"]
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
        
        //getting badges on page
        let output;
        function renderLicenseBadge(){
            let license = answers.license;
            if(license === "MIT"){
                output = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            }else if(license === "WTFPL"){
                output = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
            }else if(license === "GPL"){
                output = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            }else if(license === "MPL"){
                output = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            }
            return output;
        }
let readMeText = `# ${answers.title}

${renderLicenseBadge()}
        
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
- [${answers.githubP}](${answers.githubL})
- ${answers.email}

${answers.questions}


        `;
        console.table(answers);
        writeToFile("generatedREADME.md", readMeText)
    })
}

// Function call to initialize app
init();
