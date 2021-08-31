const fs = require('fs')
const inquirer = require('inquirer')
const {mainQuestions, engineerQuestions, internQuestions} = require("./src/questions")
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generateHTML = require("./src/htmlTemplate");

const answers = []

const employeesObj = {
    teamName:"",
    manager: [],
    engineers: [],
    interns: []
}

const init = () => {
    return inquirer.prompt(mainQuestions, answers);
}

const engineerArray = data => {
    if (!data.engineers) {
        data.engineers = []
    };

    return inquirer.prompt(engineerQuestions, answers)
        .then(newAnswers => {
            data.engineers.push(newAnswers)
            if (newAnswers.newEngineer) {
                return engineerArray(data)
            } else {
                return inquirer
                    .prompt([
                        {
                            type: "confirm",
                            name: "newIntern",
                            message: "Would you like at add any Interns to the team?"
                        }
                    ], data)
                    .then(internConfirm => {
                        if (internConfirm.newIntern) {
                            return internData(internConfirm)
                        }
                        return internConfirm
                    })
            };
        });
};

const engineerData = data => {
    if (!data.engineers) {
        data.engineers = []
    };
    return inquirer.prompt(engineerQuestions, answers)
        .then(newAnswers => {
            data.engineers.push(newAnswers)
            if (newAnswers.newEngineer) {
                return engineerData(data);
            }
            return data;
        });
};

const internArray = data => {
    if (!data.interns) {
        data.interns = []
    }
    return inquirer.prompt(internQuestions, answers)
        .then(internData => {
            data.interns.push(internData)
            if (internData.newEngineer) {
                return internArray(data)
            } else {
                return inquirer
                    .prompt([
                        {
                            type: "confirm",
                            name: "addEngineer",
                            message: "Would you like at add any Engineers to the team?"
                        }
                    ], data)
                    .then(engineerConfirm => {
                        if (engineerConfirm.addEngineer) {
                            return engineerData(engineerConfirm)
                        }
                        return engineerConfirm
                    })
            }
        })
}

const internData = data =>{
    if (!data.interns) {
        data.interns = []
    }
    return inquirer.prompt(internQuestions, answers)
        .then(internData => {
            data.interns.push(internData)
            if (internData.newInternConfirm) {
                return internData(data)
            }
            return data;
        })
}

const createEmployeeObjs = empData => {
    employeesObj.teamName = empData.teamName;
    const manager = new Manager (empData.managerName, empData.managerId, empData.managerEmail, empData.managerRoomNum)
    employeesObj.manager = manager;

    if(empData.engineers) {
        for (let i = 0; i < empData.engineers.length; i++){
            let emp = empData.engineers[i]
            const engineer = new Engineer (emp.engineerName, emp.engineerId, emp.engineerEmail, emp.engineerGitHub);
            employeesObj.engineers.push(engineer);
        }
    }

    if(empData.interns) {
        for (let i = 0; i < empData.interns.length; i++){
            let emp = empData.interns[i]
            const intern = new Intern (emp.internName, emp.internId, emp.internEmail, emp.internSchool);
            employeesObj.interns.push(intern);
        }
    }
    return employeesObj
};

const createHtml = data => {
return new Promise ((resolve, reject) => {
    fs.writeFile("./dist/newTeam.html", data, err => {
            if (err) {
                reject(err)
                return;
            }
            resolve({
                ok:true,
                message:"done"
            })
        })
    })
}

init()
    .then(data => {
        if (data.newEmpVerify && data.selectedEmployeeType === "Engineer") {
            return engineerArray(data);
        } else if (data.selectedEmployeeType === "Intern") {
            return internArray(data);
        } else {
            return data
        }
    })
    .then (data => {
        return createEmployeeObjs(data)
    })
    .then (employeeObj => {
        return generateHTML(employeeObj);
    })
    .then (tempLitHtml => {
        return createHtml(tempLitHtml)
    });