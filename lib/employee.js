class Employee {
    constructor(id, firstName, lastName, role) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
    }
    getId() {
        return this.id;
    }

    getFirstName() {
        return 'Ryan';
        
    }

    getLastName() {
        return 'Blessing';
        
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee