const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// Array of questions related to an intern
async function promptInternData() {
  await inquirer.prompt([
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
  ]);
}

// Array of questions related to an engineer
async function promptEngineerData() {
  await inquirer.prompt([
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
  ]);
}

// Array of questions related to a manager
async function promptManagerData() {
  await inquirer.prompt([
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
    },
  ]);
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

function generateHTML(answers) {}

// async function init() {
//   try {
//     const answers = promptUser();

//     const HTML = generateHTML(answers);
//     // Rather than writing to the root of the file and overwriting this projects README, user's documents are written to their own folder
//     await writeFileAsync("./output/team.html", HTML);

//     console.log("Successfully wrote to README.md.");
//   } catch (err) {
//     console.log(err);
//   }
// }
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

// init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
