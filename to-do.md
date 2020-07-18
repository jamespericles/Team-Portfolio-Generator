Primary Goals

- Multiple HTML for each type of employee
  - main.html
  - engineer.html
  - intern.html
  - manager.html
  - team.html generates to output directory
    - nice format that shows
      - name
      - role
      - ID
      - role specific property (school, github, or office number depending on role)
- Each employee type inherits methods and properties from a base 'employee' class
  - employee
    - name
    - id
    - email
    - getName()
    - getId()
    - getEmail()
    - getRole() (returns employee)
  - Manager
    - officeNumber
    - getRole() (returns manager)
  - Engineer
    - github
    - getGithub()
    - getRole() (returns engineer)
  - Intern
    - school
    - getSchool()
    - getRole() (returns Intern)
- Use validation to ensure that information provided is in the proper format
- Record video showcasing working app
- Create unit test for each class
  - Must pass each unit test

Secondary Goals
