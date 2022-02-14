const inquirer = require('inquirer');
const fs = require('fs');

// const Employee = require('./lib/employee-profile.js')

const promptUser = () => {
  return inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is your team managers name?',
      },
      {
          type: 'input',
          name: 'id',
          message: 'What is your team managers employee ID?',
      },
      {
          type: 'input',
          name: 'title',
          message: 'What is your team managers title?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your team managers email?',
      },
  ]);
}

const generateHTML = ({ name, id, title, email }) => 
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
      <div class="card-header" id="name">${name}</div>
      <div class="list-group-item" id="title">${title}</div>
      <ul class="list-group">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: <a href="mailto:${email}</a></li>
      </ul>
    </div>
  </div>
</div>
</body>
</html>`;

const init = () => {
    promptUser()
        .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();