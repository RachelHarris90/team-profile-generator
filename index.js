const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


const generateHTML = (employees) => {
const header = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <h1 class="display-4 text-center">My team</h1>
  <div class="container">
    <div class="row">`;

    let body = "";
    for(i=0; i < employees.length; i++) {
      let additionalInfo = { label:"office number", data:""};
      switch (employees[i].role) {
        case "Manager":
          additionalInfo.data = employees[i].officeNumber;
          additionalInfo.label = "Office number: ";
        break;
        case "Engineer":
          additionalInfo.data = `<a href="https://github.com/${employees[i].github}">${employees[i].github}</a>`;
          additionalInfo.label = "Github profile: ";
        break;
        case "Intern":
          additionalInfo.data = employees[i].school;
          additionalInfo.label = "School: ";
        break;
      }
      body+=`
        <div class="card m-3 col p-0">
          <div class="bg-primary text-white p-3">
            <h4>${employees[i].name}</h4>
            <h5>${employees[i].role}</h5>
          </div>
          <ul class="list-group m-3">
            <li class="list-group-item">ID: ${employees[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employees[i].email}">${employees[i].email}</a></li>
            <li class="list-group-item">${additionalInfo.label}</a>${additionalInfo.data}</li>
          </ul>
      </div>`
    }

const footer = `</div></div></div></body> </html>`

fs.writeFileSync('index.html', (header + body + footer));
}

let employees = []

function addEmployee() {
  inquirer.prompt([
    {
        type: 'list',
        name: 'type',
        message: 'What type of employee would you like to add next?',
        choices: ['Engineer', 'Intern']
    },

    ]).then((answers) => {
      switch(answers.type) {
        case 'Engineer':
          inquirer.prompt([
            {
              type: 'input',
              name: 'name',
              message: 'What is the engineers name?',
            },
            {
              type: 'input',
              name: 'id',
              message: 'What is the engineers ID?',
            },
            {
              type: 'input',
              name: 'email',
              message: 'What is the engineers email address?',
            },
            {
              type: 'input',
              name: 'github',
              message: 'What is the engineers github?',
            },
          ]).then((answers) => {
            const {name, id, email, github} = answers;
            employees.push(new Engineer(name, id, email, github));
            inquirer.prompt([
              {
                type: 'list',
                name: 'add',
                message: 'Would you like to add another employee?',
                choices: ['Yes', 'No']
              },
            ]).then((answers) => {
              if (answers.add == 'Yes') {
                addEmployee();
              } else {
                generateHTML(employees);
                console.log("Successfully generated HTML");
              }
            })
          });
        break;
        case 'Intern':
          inquirer.prompt([
            {
              type: 'input',
              name: 'name',
              message: 'What is the interns name?',
            },
            {
              type: 'input',
              name: 'id',
              message: 'What is the interns ID?',
            },
            {
              type: 'input',
              name: 'email',
              message: 'What is the interns email address?',
            },
            {
              type: 'input',
              name: 'school',
              message: 'What is the interns school?',
            },
          ]).then((answers) => {
            const {name, id, email, school} = answers;
            employees.push(new Intern(name, id, email, school));
            inquirer.prompt([
              {
                type: 'list',
                name: 'add',
                message: 'Would you like to add another employee?',
                choices: ['Yes', 'No']
              },
            ]).then((answers) => {
              if (answers.add == 'Yes') {
                addEmployee();
              } else {
                generateHTML(employees);
                console.log("Successfully generated HTML");
              }
            })
          });
        break;
      }
  })
}

const init = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the managers name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the managers ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the managers email address?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the managers office number?',
    },
  ]).then((answers) => {
    const {name, id, email, officeNumber} = answers;
    employees.push(new Manager(name, id, email, officeNumber));
    addEmployee();
  })
};

init();
