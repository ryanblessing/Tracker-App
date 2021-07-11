const connection = require('./connection');

class DataBase {
    constructor(connection) {
        this.connection = connection
    }
    seeAllEmployees() {
        return this.connection.promise().query(`SELECT 
     
        employees.id, employees.first_name, employees.last_name, employees.role_id  AS job_title, department_name AS department, roles.salary
        
        FROM employees
        
        JOIN roles ON employees.role_id = roles.id
        
        JOIN departments ON roles.department_id = departments.id;`
        )
     };

     seeAllRoles(){
        return this.connection.promise().query(`SELECT * FROM roles`)
     }  

     
     seeAllDepartments(){
        return this.connection.promise().query(`SELECT * FROM departments`)
     }
    

    createDepartment(departments) {
        return this.connection.promise().query(`INSERT INTO departments(name) VALUES (?)`, departments)
    }


    createNewRole(roles){
        return this.connection.promise().query(`INSERT INTO roles SET ?`, roles)
    }
    createNewEmployee(employees){
        return this.connection.promise().query(`INSERT INTO employees SET ?`, employees)
    }
}

module.exports = new DataBase(connection)