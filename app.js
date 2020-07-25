const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

let team = [];

// May be weird, but I view the application as if it looks like the nordic 'Algiz' (ᛉ) rune
// where promptEmployeeType() is the base, with the three employee types as the three branches to follow
// Like a road forking with three paths.

// Array of questions related to an intern

const validatePhoneNumber = async (input) => {
  if (isNaN(input) == true) {
    return "Please input a number without hyphens or parentheses";
  }
  return true;
};

async function promptInternData() {
  let continueType;
  await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What school did the intern graduate from?",
      },
      {
        type: "list",
        name: "continue",
        message: "Would you like to add another employee?",
        choices: ["Yes", "No"],
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.ID,
        answers.email,
        answers.school
      );
      team.push(intern);
      continueType = answers.continue;
      // Lines 53-57 exist in all three employee type 'pathways' the user can take via inquirer
      // Answering yes will return the user to the beginning of the question line where they can follow a new path
      // Answering no will call our generateHTML function passing the render and team array in.
      if (continueType === "Yes") {
        promptEmployeeType();
      } else if (continueType === "No") {
        generateHTML(render(team));
      }
    });
}

// Array of questions related to an engineer
async function promptEngineerData() {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the engineer?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's github URL?",
      },
      {
        type: "list",
        name: "continue",
        message: "Would you like to add another employee?",
        choices: ["Yes", "No"],
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.ID,
        answers.email,
        answers.github
      );
      team.push(engineer);
      continueType = answers.continue;
      if (continueType === "Yes") {
        promptEmployeeType();
      } else if (continueType === "No") {
        generateHTML(render(team));
      }
    });
}

// Array of questions related to a manager
async function promptManagerData() {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the manager?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is the manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: validatePhoneNumber,
      },
      {
        type: "list",
        name: "continue",
        message: "Would you like to add another employee?",
        choices: ["Yes", "No"],
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.ID,
        answers.email,
        answers.officeNumber
      );
      team.push(manager);
      continueType = answers.continue;
      if (continueType === "Yes") {
        promptEmployeeType();
      } else if (continueType === "No") {
        generateHTML(render(team));
      }
    });
}

// First question to determine what branch to follow
function promptEmployeeType() {
  let employeeType;
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to add?",
        choices: ["Intern", "Engineer", "Manager"],
      },
    ])
    // The user is taken to the different inquirer branches based on which employee type they select
    .then((answer) => {
      employeeType = answer.employeeType;
      if (employeeType === "Intern") {
        promptInternData();
      } else if (employeeType === "Engineer") {
        promptEngineerData();
      } else if (employeeType === "Manager") {
        promptManagerData();
      }
    });
}

// Function to prompt user with first question, and logic to determine what set of questions to follow up with
let employeeType = promptEmployeeType();
let employeeData;
if (employeeType === "Intern") {
  employeeData = promptInternData();
} else if (employeeType === "Engineer") {
  employeeData = promptEngineerData();
} else if (employeeType === "Manager") {
  employeeData = promptManagerData();
}

// OUTPUT_DIR is used to create a directory called output relative to the location of this file
// outputPath is used to generate the file itself
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

function generateHTML(html) {
  if (fs.existsSync(OUTPUT_DIR)) {
    console.log("Pathway exists, ready for generation");
  } else fs.mkdirSync(OUTPUT_DIR);

  fs.writeFileSync(outputPath, html);
}
