const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const employeeArray = [];

function menuPrompt() {
    return inquirer
        .prompt([{
            type: 'list',
            name: 'menu',
            message: "Please choose from the following options",
            choices: [
                "View-All-Departments",
                "View-All-Roles",
                "View-All-Managers",
                "View-All-Employees",
                "Finished"
            ],
            validate: (menuData) => {
                if (menuData) {
                    return true;
                } else {
                    console.log(
                        "To continue you must choose from the following:"
                    );
                    return false;
                }
            },
        },])
        .then((menuData) => {
            switch(menuData.menu) {
                case "View-All-Departments":
                    //show that table
                    break;
                case "View-All-Roles":
                    //show that table
                    break;
                case "View-All-Managers":
                    //show that table
                    break;
                case "View-All-Employees":
                    //show that table
                    break;
                case "Finished":
                    //show that table
                    break;
            }
        });
};

menuPrompt();