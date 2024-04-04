const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Function to prompt for manager details
function promptManager() {
  console.log('Please enter the team manager’s details:');
  return inquirer.prompt([
    {
      name: 'name',
      message: 'Enter the manager’s name:'
    },
    {
      name: 'id',
      message: 'Enter the manager’s ID:'
    },
    {
      name: 'email',
      message: 'Enter the manager’s email:'
    },
    {
      name: 'officeNumber',
      message: 'Enter the manager’s office number:'
    }
  ]);
}

// Function to prompt for engineer details
function promptEngineer() {
  return inquirer.prompt([
    {
      name: 'name',
      message: 'Enter the engineer’s name:'
    },
    {
      name: 'id',
      message: 'Enter the engineer’s ID:'
    },
    {
      name: 'email',
      message: 'Enter the engineer’s email:'
    },
    {
      name: 'github',
      message: 'Enter the engineer’s GitHub username:'
    }
  ]);
}

// Function to prompt for intern details
function promptIntern() {
  return inquirer.prompt([
    {
      name: 'name',
      message: 'Enter the intern’s name:'
    },
    {
      name: 'id',
      message: 'Enter the intern’s ID:'
    },
    {
      name: 'email',
      message: 'Enter the intern’s email:'
    },
    {
      name: 'school',
      message: 'Enter the intern’s school:'
    }
  ]);
}

// Function to prompt for additional team members
function promptTeamMember() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Which type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'I do not want to add any more team members']
    }
  ]);
}

// Function to initialize the application
async function init() {
  const teamMembers = [];
  let done = false;

  // Prompt for manager details
  const managerAnswers = await promptManager();
  const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
  teamMembers.push(manager);

  // Prompt for additional team members
  while (!done) {
    const { role } = await promptTeamMember();

    if (role === 'I do not want to add any more team members') {
      done = true;
    } else if (role === 'Engineer') {
      const engineerAnswers = await promptEngineer();
      const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
      teamMembers.push(engineer);
    } else if (role === 'Intern') {
      const internAnswers = await promptIntern();
      const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
      teamMembers.push(intern);
    }
  }

  // Generate HTML
  const htmlContent = generateHTML(teamMembers);

  // Write HTML to file
  fs.writeFile('dist/team.html', htmlContent, err => {
    if (err) throw err;
    console.log('Team roster generated successfully!');
  });
}

// Function to generate HTML from team members
function generateHTML(teamMembers) {
  const cardsHtml = teamMembers.map(member => {
    let specialInfo = '';
    if (member.getRole() === 'Manager') {
      specialInfo = `<p>Office Number: ${member.getOfficeNumber()}</p>`;
    } else if (member.getRole() === 'Engineer') {
      specialInfo = `<p>GitHub: <a href="https://github.com/${member.getGithub()}">${member.getGithub()}</a></p>`;
    } else if (member.getRole() === 'Intern') {
      specialInfo = `<p>School: ${member.getSchool()}</p>`;
    }

    return `
<div class="card">
  <h2>${member.getName()}</h2>
  <p>ID: ${member.getId()}</p>
  <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
  ${specialInfo}
</div>
`;
  }).join('');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Roster</title>
  <style>
    .card {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 20px;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <h1>Team Roster</h1>
  ${cardsHtml}
</body>
</html>
`;
}

// Call init function to start the application
init();
