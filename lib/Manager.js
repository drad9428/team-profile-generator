const Employee = require('../lib/Employee')

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officNumber
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager