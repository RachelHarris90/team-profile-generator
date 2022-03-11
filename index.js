const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Employee = require('./lib/employee');


const generateHTML = ({ name, id, email, officeNumber }) => 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">My team</h1>
    <ul class="list-group pb-3">
      <li class="list-group-item"><a id="title"></a>Manager</li>
      <li class="list-group-item"><a id="name"></a>${name}</li>
      <li class="list-group-item"><a href="#id"></a>${id}</li>
      <li class="list-group-item"><a href="mailto:${email}">${email}</a></li>
      <li class="list-group-item"><a href="#id"></a>${officeNumber}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

let employees = []

function addEmployee() {
  inquirer.prompt([
    {
        type: 'list',
        name: 'type',
        message: 'What type of employee?',
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
          });
        break;
      }
    inquirer.prompt([
      {
        type: 'list',
        name: 'add',
        message: 'Add another employee?',
        choices: ['Yes', 'No']
      },
    ]).then((answers) => {
      if (answers.add == 'Yes') {
        addEmployee();
      } else {
        console.log(employees)
      }
    })
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


  // .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
  // .then(() => console.log('Successfully wrote to index.html'))
  // .catch((err) => console.error(err));
};

init();
