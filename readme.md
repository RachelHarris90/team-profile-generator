# readme-generator

## Description
This project is a command-line application to generate a team profile webpage.

## Built with
* Node.js
* JavaScript
* Tested with Jest

## Features
* Command-line prompts
* Generated HTML, with Bootstrap styling
* Hyperlinks on email address, 


## Acceptance criteria
* GIVEN a command-line application that accepts user input
* WHEN I am prompted for my team members and their information
* THEN an HTML file is generated that displays a nicely formatted team roster based on user input
* WHEN I click on an email address in the HTML
* THEN my default email program opens and populates the TO field of the email with the address
* WHEN I click on the GitHub username
* THEN that GitHub profile opens in a new tab
* WHEN I start the application
* THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
* WHEN I enter the team manager’s name, employee ID, email address, and office number
* THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
* WHEN I select the engineer option
* THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
* WHEN I select the intern option
* THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
* WHEN I decide to finish building my team
* THEN I exit the application, and the HTML is generated

![Example](./assets/example.jpeg)


## Getting started
### Prerequisites
The inquirer and fs node dependencies are required.
`npm install inquirer`
`npm install fs`
`npm install jest`

### Installation
To close the repo, follow these instructions:
[cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) or follow the instructions below

1. Open Terminal
2. Change the current working directory to the location where you want the cloned directory
3. Type git clone, and then paste the URL you copied earlier
```
$ git clone https://github.com/RachelHarris90/readme-generator.git
```
4. Press Enter

## Usage
The use this application, ensure the dependencies are installed.

1. Open index.js in integrated terminal
2. Type `node index.js` and hit enter
3. Add your README content by answering the questions

![Example of command-line](./assets/images/command-line-example.png)

After running the application from the command-line, an index.html page is generated and can be viewed in a web browser.

![Example of README webpage](./assets/images/webpage-example.png)

An example is available at [Github pages](https://rachelharris90.github.io/readme-generator/)

Watch [this video](https://watch.screencastify.com/v/jnn0r1p51Tvbr4aqEUPg) to see it in action 

## License
Not licensed.

## Tests
This code is unit tested using Jest.