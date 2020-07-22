const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const writeFileAsync = util.promisify(fs.writeFile);

async function promptInternData() {
    inquirer.prompt([
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
    ])
}

async function promptEngineerData() {
    inquirer.prompt([
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
            type: "",
            name: "",
            message: "What is the engineer's github URL?",
        },
    ])
}

async function promptEmployeeType() {
    const employeeType
  
    inquirer.prompt([
      {
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to add?",
        choices: ["Intern", "Engineer", "Manager"],
      },
    ]).then((answer) => {
      employeeType = answer.employeeType;
    });
  
    return employeeType;
  }
  
  const employeeType = await promptEmployeeType()
  const employeeData;
  if (employeeType === "Intern") {employeeData = await promptInternData()}
else if (employeeType === "Engineer") {employeeData = await promptEngineerData()} 
else if (employeeType === "Manager") {employeeData = await promptManagerData()}

function generateHTML(answers) {}

async function init() {
  try {
    const answers = await promptUser();

    const HTML = generateHTML(answers);
    // Rather than writing to the root of the file and overwriting this projects README, user's documents are written to their own folder
    await writeFileAsync("./output/team.html", HTML);

    console.log("Successfully wrote to README.md.");
  } catch (err) {
    console.log(err);
  }
}
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

init();

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
