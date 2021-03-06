# Team Portfolio Generator [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

---

## Table of Contents

---

### [Description](#Description)

### [Screenshots](#Screenshots)

### [Installation](#Installation)

### [Usage](#Usage)

### [License](#License)

### [Contributing](#Contributing)

### [Tests](#Tests)

### [Questions](#Questions)

### [Github](#Github)

---

### <a name="Description"></a>Description

This application is created with the workplace in mind. It creates a HTML document based on user input from the command line using inquirer. Besides this, the code is written in such a way that it can be easily tested using Jest, allowing for it be incremented on easily.

When all dependencies have been installed, the user is able to run app.js in their terminal using node. Doing so will prompt them first with the type of employee to be added first. The user will then be asked a series of questions specific to the type of employee they first specified. At the end of that line of questioning, the user can opt to either add another employee or to finish, which will then generate the `team.html` file.

Things to note :

##### 1. The `output` directory does not need to be created prior to running app.js within node

##### 2. Similarly, `team.html` does not need to be created prior to running app.js

##### 3. If a `team.html` file is in the output directory prior to running app.js, it will be overwritten

##### 4. Any question can be skipped by pressing `enter` or `return` if so desired

### <a name="Screenshots"></a>Screenshots

![Questions_Asked](https://github.com/jamespericles/Team-Portfolio-Generator/blob/master/Screenshots/QuestionsAsked.png)

![Family_Business](https://github.com/jamespericles/Team-Portfolio-Generator/blob/master/Screenshots/FamilyBusiness.png)

##### For a live demo, check out a short clip <a href="https://youtu.be/dgkbagI9SHY">here</a>

### <a name="Installation"></a>Installation

Upon downloading the repository to your local machine, run `npm i` from your console to install the necessary dependencies. Afterwards, `node app.js` will begin the application. Once finished with adding each employee, selecting `no` when being asked to continue will create a directory called `output` and a file `team.html` with all of the inputs you gave.

### <a name="Usage"></a>Usage

This application is designed to help managers keep track of an ever growing team working on their project. The generated html file can be shared within the group to allow for every member of the team to have the primary contact email for every employee that was added, along with a cursory knowledge of who each employee is.

### <a name="License"></a>License

MIT License

Copyright (c) 2020 James Pericles

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### <a name="Contributing"></a>Contributing

Per the license, anyone is able to iterate on this project. My contact information is below if you have any questions regarding contributing, the license, or the project itself.

### <a name="Tests"></a>Tests

Testing was completed using Jest. The only tests ran were to ensure that the classes created were formatted properly.

### <a name="Questions"></a>Questions

I can be contacted at jamesspericles@gmail.com with any questions regarding this project.

### <a name="Github"></a>Github

Username: https://github.com/jamespericles
Project Repository: https://github.com/jamespericles/Team-Portfolio-Generator
