const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, firstName, lastName, role) {
        super(id, firstName, lastName)
        this.role = role
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager