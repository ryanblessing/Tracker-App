const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');

const employeeArray = [];

const userPrompt = {
    userPrompt: () => {
        return inquirer.prompt([{
            type: 'list',
            name: 'menu',
            message: 'Please choose one of the following options!',
            choices: ["View All departments", "View Roles", "View Employees", "Add Departments", "Add Roles", "Add Employee", "Update Employee"]
        }])
        .then((answer) => {
            switch (answer.menu) {
                case "View All departments":
                    departmentPrompt();
                    break;
                case "View Roles":
                    rolePrompt();
                    break;
                case "View Employees":
                    employeePrompt();
                    break;
                case "Add Departments":
                    addDeparmentPrompt();
                    break;
                case "Add Roles":
                    addRolesPrompt();
                    break;
                case "Add Manager":
                    addManagerPrompt();
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
}

//create prompt to view all departments
const departmentPrompt = {
    departmentPrompt:() => {
        return inquirer.prompt([{
            type: 'list',
            name: 'department',
        }])
    }
}

//create prompt to Add roles
const addRolesPrompt = {
        addRolePrompt:() => {
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
        ])
    }
},

//create comp to add managers
const addManagerPrompt = {
        addManagerPrompt: () => {
        return inquirer.prompt([{
            type: 'input',
            name: 'managerId',
            message: 'Please enter the Managers ID'
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
            choices: ['1-Sales Manager', '3-Development Manager']
        }
        ])
    }
},

const addEmployeePrompt = {
    addEmployeePrompt: () => {
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
}



module.exports = userPrompt;