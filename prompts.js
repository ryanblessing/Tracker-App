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
const addRolePrompt = {
        rolePrompt:() => {
        return inquirer.prompt([{
            type: 'list',
            name: 'role',
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
        managerPrompt: () => {
        return inquirer.prompt([{
            type: 'input',
            name: 'manager_id',
            message: 'Please enter the Managers ID',
            choices: ['1', '2', '3', '4']
        }])
    }
}



module.exports = userPrompt;