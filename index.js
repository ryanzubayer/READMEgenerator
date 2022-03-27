const inquirer = require("inquirer");
const fs = require('fs')
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions to get readme content 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter your project description!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'install',
        message: 'How is this project installed? Please provide step-by-step instructions(Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed. ',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide and example of the project usage');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project',
        choices: ['No License','GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0']
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Please enter your Github username',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter your Github username');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your Email address',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {t
                console.log('You must enter an email for contact');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'contibutions',
        message: 'Please provide some guidelines for developers on how to contibute to this project'

    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write some tests for your applications here:'

    }

]

const init = () => {
    inquirer.prompt(questions)
        .then((answers) => {
            // console.log(generateMarkdown(answers))
            fs.writeFileSync(path.join(process.cwd(), 'dist/GeneratedReadMe.md'), generateMarkdown(answers))
            console.log('new file created')
        })
}
init()
