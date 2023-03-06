// Require the inquirer package for prompting user input in the command line
const inquirer = require("inquirer");
// Require the fs (file system) package for interacting with the file system
const fs = require("fs");
// Require the path package for working with file paths
const path = require("path");

// Require the Manager class from the Manager module in the lib directory
const Manager = require("./lib/Manager");
// Require the Engineer class from the Engineer module in the lib directory
const Engineer = require("./lib/Engineer");
// Require the Intern class from the Intern module in the lib directory
const Intern = require("./lib/Intern");

// Empty array to be populated with inputted constructor classes
const teamMembersArray = [];

// Introduction text when loading program
const clickStartQuestion = {
    type: "list",
    message: `
    Would you like to start the team builder application?`,
    choices: ["Yes", "No"],
    name: "clickIntroQuestion",
};

// Manager constructor questions (ID, Name, Email, Office Number)
const managerQuestions = [
    {
        type: "input",
        message: "What is the Manager's ID number?",
        name: "managerId",
        validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
        },
    },
    {
        type: "input",
        message: "What is the Manager's name?",
        name: "managerName",
    },
    {
        type: "input",
        message: "What is the Manager's email?",
        name: "manageEmail",
    },
    {
        type: "input",
        message: "What is the Manager's office number?",
        name: "managerOfficeNumber",
        validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
        },
    },
];

// Prompt asking whether or not to add another team member
const endManagerQuestions = {
    type: "list",
    message:
        "Would you like to add another member to the team? Select 'Yes' if there are more team members or select 'No' if no more team members to be added.",
    choices: ["Yes", "No"],
    name: "teamSize",
};

// Prompt asking which role the new team member (if any) should have
const teamMemberRolePick = {
    type: "list",
    message: "Is this team member an Intern or an Engineer?",
    choices: ["Intern", "Engineer"],
    name: "teamMemberRoleType",
};

// Prompt for the Intern section (ID, Name, Email, School)
const internQuestions = [
    {
        type: "input",
        message: "What is this intern's ID number?",
        name: "internId",
        validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || "Please enter a number";
        },
    },
    {
        type: "input",
        message: "What is this intern's name?",
        name: "internName",
    },
    {
        type: "input",
        message: "What is this intern's email?",
        name: "internEmail",
    },
    {
        type: "input",
        message: "What is this intern's school?",
        name: "internSchool",
    },
];

// Prompt for the Engineer selection (ID, Name, Email, GitHub)
const engineerQuestions = [
    {
        type: "input",
        message: "What is this Engineer's ID number?",
        name: "engineerId",
        validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || "Please enter a number";
        },
    },
    {
        type: "input",
        message: "What is this Engineer's name?",
        name: "engineerName",
    },
    {
        type: "input",
        message: "What is this Engineer's email?",
        name: "engineerEmail",
    },
    {
        type: "input",
        message: "What is this Engineer's GitHub Profile Name?",
        name: "engineerGithub",
    },
];

// Function to initiate the app
function clickStart() {
    inquirer.prompt(clickStartQuestion).then((answers) => {
        if (answers.clickIntroQuestion === "Yes") {
            console.log("Please Submit Manager Info");
            managerInfo();
        } else {
            console.log("Application Closed");
        }
    });
}

// Function to create the manager and call the teamSizeInfo function for team size
function managerInfo() {
    inquirer.prompt(managerQuestions).then((managerBuild) => {
        let manager = new Manager(
            managerBuild.managerId,
            managerBuild.managerName,
            managerBuild.manageEmail,
            managerBuild.managerOfficeNumber
        );
        teamMembersArray.push(manager);
        teamSizeInfo();
    });
}

// Function to decide the size of the team
function teamSizeInfo() {
    inquirer.prompt(endManagerQuestions).then((teamSize) => {
        // With "Yes" you add another member to the array. This call the teamMemberloop funciton which loops the questions (Intern/Engineer)
        if (teamSize.teamSize === "Yes") {
            teamMemberLoop();
        }
        if (teamSize.teamSize === "No") {
            // If "No" then no more members need to be added, the application then starts generating the HTML file with data being dynamically added to it
            console.log("Sequence Complete");
            finishTeam(teamMembersArray);
        }
    });
}

// Function to choose the type of team member (Intern or Engineer) and prompt questions to build additional class constructors.
function teamMemberLoop() {
    inquirer.prompt(teamMemberRolePick).then((teamrole) => {
        if (teamrole.teamMemberRoleType === "Intern") {
            console.log("Please Submit Intern Info");
            inquirer.prompt(internQuestions).then((internBuild) => {
                let intern = new Intern(
                    internBuild.internId,
                    internBuild.internName,
                    internBuild.internEmail,
                    internBuild.internSchool
                );
                teamMembersArray.push(intern);
                teamSizeInfo();
            });
        } else if (teamrole.teamMemberRoleType === "Engineer") {
            console.log("Please Submit Engineer Info");
            inquirer.prompt(engineerQuestions).then((engineerBuild) => {
                let engineer = new Engineer(
                    engineerBuild.engineerId,
                    engineerBuild.engineerName,
                    engineerBuild.engineerEmail,
                    engineerBuild.engineerGithub
                );
                teamMembersArray.push(engineer);
                teamSizeInfo();
            });
        }
    });
}

// Create Rendered-Team-Page.HTML and save it in dist folder
function finishTeam() {
    const managerTemplate = (manager) => {
        return `<div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <div class="card employee-card">
                <div class="card-header rounded-0">
		            <h2 class="card-title">${manager.name}</h2>
                    <h3 class="card-title">
                        <i class="fa-solid fa-briefcase"></i> Manager
                    </h3>
		        </div>
		        <div class="card-body">
		            <ul class="list-group mt-5">
			            <li class="list-group-item rounded-0">ID:${manager.id}</li>
			            <li class="list-group-item rounded-0">
			                Email: <a href="mailto:${manager.email}">${manager.email}</a>
			            </li>
			            <li class="list-group-item rounded-0">Office number:${manager.officeNumber}</li>
		            </ul>
		        </div>
	        </div>`;
    };
    const engineerTemplate = (engineer) => {
        return `<div class="card employee-card">
	    <div class="card-header rounded-0">
	        <h2 class="card-title">${engineer.name}</h2>
	        <h3 class="card-title">
		        <i class="fa-solid fa-screwdriver-wrench"></i> Engineer
	        </h3>
	    </div>
	    <div class="card-body">
	        <ul class="list-group mt-5">
		        <li class="list-group-item rounded-0">ID: ${engineer.id}</li>
		        <li class="list-group-item rounded-0">
		            Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
		        </li>
		        <li class="list-group-item rounded-0">
		            GitHub:
		            <a href="https://github.com/${engineer.github}" target="_blank"
			            rel="noopener noreferrer">${engineer.github}</a>
		        </li>
	        </ul>
	    </div>
    </div>`;
    };
    const internTemplate = (intern) => {
        return `<div class="card employee-card">
	    <div class="card-header rounded-0">
	        <h2 class="card-title">${intern.name}</h2>
	        <h3 class="card-title">
		    <i class="fa-solid fa-graduation-cap"></i> Intern
	        </h3>
	    </div>
	    <div class="card-body">
	        <ul class="list-group mt-5">
		        <li class="list-group-item rounded-0">ID: ${intern.id}</li>
		        <li class="list-group-item rounded-0">
		            Email:
		            <a href="mailto:${intern.email}">${intern.email}</a>
		        </li>
		        <li class="list-group-item">School: ${intern.school}</li>
	        </ul>
	    </div>
  </div>`;
    };
    let data = ``;
    for (i = 0; i < teamMembersArray.length; i++) {
        if (teamMembersArray[i].getRole() === "Manager") {
            data += managerTemplate(teamMembersArray[i]);
        } else if (teamMembersArray[i].getRole() === "Engineer") {
            data += engineerTemplate(teamMembersArray[i]);
        } else if (teamMembersArray[i].getRole() === "Intern") {
            data += internTemplate(teamMembersArray[i]);
        }
    }

    const html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://kit.fontawesome.com/33383187e7.css" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-5 team-header">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
    ${data}
    <script src="https://kit.fontawesome.com/33383187e7.js" crossorigin="anonymous"></script>
</body>
</html>
	`;

    fs.writeFile("./dist/Rendered-Team-Page.html", html, (err) => {
        if (err) console.log(err);
        else {
            console.log("Rendered-Team-Page.html Generated");
        }
    });
}

clickStart();