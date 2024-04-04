// src/templateHelper/generateHTML.js

// Function to generate HTML from team members data
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
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="container">
    <div class="header">
      <h1>Team Roster</h1>
    </div>
    ${cardsHtml}
  </div>
</body>
</html>
`;
}

module.exports = generateHTML;
