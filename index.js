const inquirer = require('inquirer');
const fs = require('fs');

const promptUse = () => {
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
    ]);
}

const generateHTML = ({ name, id, title}) => 
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
    <h1 class="display-4">"My team"</h1>
    <ul class="list-group pb-3">
      <li class="list-group-item"><a id="name"></a></li>
      <li class="list-group-item"><a id="title"></a></li>
      <li class="list-group-item"><a href="#id"></a></li>
      <li class="list-group-item"><a href="mailto:${email}">${email}</a></li>
      <li class="list-group-item"><a href="https://github.com/${github}">${github}.</a></a></li>
    </ul>
  </div>
</div>
</body>
</html>`;

const init = () => {
    promptUser()
        .then((answer) => fs.writeFileSync('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();