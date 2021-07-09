const inquirer = require('inquirer');
const fs = require('fs');
const dbData = require('./db/connection.js');




function userPrompt() {
    return inquirer.prompt([{
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
                    employees();
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

//create table to view all departments
function departments() {
    // Get Data - Query DB
    dbData.query(`SELECT * FROM departments ORDER BY id`, (err, result) => {
        if (err) throw err;
        // Display Data
        result.forEach(row => {
            console.table(row)
        })
        return userPrompt();
    })
}


function roles() {
    // Get Data - Query DB
    dbData.query(`SELECT * FROM roles ORDER BY id`, (err, result) => {
        if (err) throw err;
        // Display Data
        result.forEach(row => {
            console.table(row)
        })
        return userPrompt();
    })
}

//function to see employees
function employees() {
    dbData.query(`SELECT * FROM employees ORDER BY id`, (err, result) => {
        if (err) throw err;
        // Display Data
        result.forEach(row => {
            console.table(row)
        })
        return userPrompt();
    })

}


//create prompt to Add roles
function addRolesPrompt() {
    return inquirer.prompt([{
            type: 'list',
            name: 'addRole',
            message: ' Please choose one of the roles!',
            choices: ['Sales Manager', 'sales associate', 'Development Manager', 'Development Engineer']
        },
        {
            name: 'salary',
            message: 'Enter the salary for this role'
        },
        {
            name: 'department_id',
            message: 'What department does this employee belong to?'
        }
    ]) //.then()
}

function addEmployeePrompt() {

    return inquirer.prompt([{
            type: 'input',
            name: 'employeeId',
            message: 'Please enter the employees ID'
        },
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the persons first name?'

        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the persons last name?'
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'What is the role Id number?',
            choices: ['2-Sales Associate', '4-Development Engineer']
        },
        {
            type: 'input',
            name: 'managerId',
            Message: 'What is the employees, Managers Id?',
            choices: ['Sales Manager', 'Development Manager']
        }
    ])
}
userPrompt();