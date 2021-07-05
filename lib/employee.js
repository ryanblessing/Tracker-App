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
        return this.FirstName;
        
    }

    getLastName() {
        return this.LastName;
        
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee