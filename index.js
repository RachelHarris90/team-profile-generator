const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./lib/manager.js')
const engineer = require('./lib/engineer.js')
const intern = require('./lib/inter.js')

const prompt = () => {
  return inquirer.prompt([
      {
          type: 'input',
          name: 'employeeName',
          message: 'What is your team managers name?',
      },
      {
          type: 'input',
          name: 'employeeId',
          message: 'What is your team managers employee ID?',
      },
      {
        type: 'input',
        name: 'employeeEmail',
        message: 'What is your team managers email?',
      },
  ]);
}

const generateHTML = ({ employeeName, employeeId, employeeEmail }) => 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>My team</title>
  <link rel="stylesheet" href="./dist/style.css"/>
</head>
<body>
  <h1>My team</h1>
  <div class="card-deck">
    <div class="card">
      <div class="card-header" id="name">${employeeName}</div>
      <div class="list-group-item" id="title">Employee</div>
      <ul class="list-group">
        <li class="list-group-item">ID: ${employeeId}</li>
        <li class="list-group-item">Email: <a href="mailto:${employeeEmail}></a></li>
      </ul>
    </div>
  </div>
</body>
</html>`;


const init = () => {
    prompt()
        .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();