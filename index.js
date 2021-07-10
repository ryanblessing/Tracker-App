const { prompt } = require('inquirer');
const fs = require('fs');
const db = require('./db/index.js');
const { table } = require('console');

function userPrompt() {
    prompt([{
            type: 'list',
            name: 'menu',
            message: 'Please choose one of the following options!',
            choices: ["View All Departments", "View Roles", "View Employees", "Add Departments", "Add Roles", "Add Employee", "Update Employee"]
        }])
        .then((answer) => {
            switch (answer.menu) {
                case "View All Departments":
                    departments();
                    break;
                case "View Roles":
                    roles();
                    break;
                case "View Employees":
                    viewEmployees();
                    break;
                case 'Add Departments':
                    addDepartmentsPrompt();
                    break;
                case "Add Roles":
                    addRolesPrompt();
                    break;
                case "Add Employee":
                    addEmployeePrompt();
                    break;
                case "Update Employee":
                    updatePrompt();
                    break;
            }
        });
}


//prompt for info for new department
function addDepartmentsPrompt() {
    prompt([{
        type: 'list',
        name: 'addDepartment',
        message: 'would you like to add a department',
        choices: ['Yes', 'No']
    }]).then((answer) => {
        switch (answer.addDepartment) {
            case 'Yes':
                addNewDepartment();
                break;
            case 'No':
                 userPrompt();
                 break;
        }
    })
}
//function to create new department
function addNewDepartment() {
    prompt([{
        name: 'name',
        message: 'Please enter the name of your new department.'
    }]).then(res => {
        let name = res
        db.createDepartment(name)
            .then(() => console.log(`added ${name.name} to the db`))
            .then(() => userQuestions())
    })
}

//create prompt to Add roles
function addRolesPrompt() {
    prompt([{
            type: 'list',
            name: 'addRole',
            message: ' Please choose one of the roles!',
            choices: ['Sales Manager', 'sales associate', 'Development Manager', 'Development Engineer']
        },
        {
            type: 'number',
            name: 'salary',
            message: 'Enter the salary for this role'
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'What department does this employee belong to?',
            choices: ['Sales', 'Development']
        }
    ])
}

// prompts to create employees
function addEmployeePrompt() {
    prompt([{
            type: 'input',
            name: 'first_name',
            message: 'What is the persons first name?'

        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the persons last name?'
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'What is the role Id number?',
            choices: ['2-Sales Associate', '4-Development Engineer']
        },
        {
            type: 'list',
            name: 'manager_id',
            Message: 'What is the employees, Managers Id?',
            choices: ['Sales Manager', 'Development Manager']
        }
    ]).then((answer) => {
        switch (answer.addEmployeesPrompt) {
            case 'yes':
                seeAllEmployees();
                break;
            case 'no':
                return userPrompt();
        }
    })
}

//function to see employees
function viewEmployees() {
    db.seeAllEmployees()
    .then(([rows]) => {
        let employees = rows
        console.log("\n")
        console.table(employees)
    })
    .then(() => userPrompt())
}

function roles() {
    db.seeAllRoles()
    .then(([rows]) => {
        let roles = rows
        console.log('\n')
        console.table(roles)
    })
    .then(() => userPrompt()) 
};

function departments() {
    db.seeAllDepartments()
    .then(([rows]) => {
        let departments = rows
        console.log('\n')
        console.table(departments)
    })
    .then(() => userPrompt()) 
};

userPrompt();