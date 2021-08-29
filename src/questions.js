const mainQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Manager name:'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Manager ID:'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Manager email:'
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'Manager Office Number:'
    },
    {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Add new employee?:'
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'Engineer or Intern?',
        choices: ['Engineer', 'Intern']
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Engineer name:'
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'Engineer ID:'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Engineer email:'
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'Engineer GitHub username'
    },
    {
        type: 'confirm',
        name: 'newEngineer',
        message: 'Add another engineer?:'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'Intern name:'
    },
    {
        type: 'input',
        name: 'internId',
        message: 'Intern ID:'
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Intern email:'
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Intern school:'
    },
    {
        type: 'confirm',
        name: 'newIntern',
        message: 'Add another Intern?:'
    }
]

module.exports = {mainQuestions, engineerQuestions, internQuestions}