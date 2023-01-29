const inquirer = require('inquirer')
const mysql = require('mysql2')
require('console.table')
require('dotenv').config()

let employeeNames = []
let managerNames = []
let roleNames = []
let departmentNames = []


const options = () => {
    return inquirer.prompt([
        {
            name: 'options',
            type: 'list',
            message: 'welcome to the employee tracker',
            choices: ['employees', 'departments', 'roles', 'delete an employee', 'exit']
        }
    ]).then(answer => {
        if (answer.options === 'departments') { departments()}
        if (answer.options === 'roles') { roles()}
        if (answer.options === 'employees') { employees()}
    })
}

const departments = () => {
    return inquirer.prompt([
        {
            name: 'chooseDepartmentMode',
            type: 'list',
            message: 'choose a department mode:',
            choices: ['(1) see all departments', '(2) add department', '(3) delete department']
        },
        {
            name: 'addDepartment',
            type: 'input',
            message: 'what is your new department called?',
            when: ({ chooseDepartmentMode }) => {
                const option = chooseDepartmentMode.split(/[()]+/)
                if (option[1] === '2') {
                    return true 
                }
            }
        },
        {
            name: 'deleteDepartment',
            type: 'rawlist',
            message: 'choose a department you would like to delete',
            when: ({ chooseDepartmentMode }) => {
                const option = chooseDepartmentMode.split(/[()]+/)
                if (option[1] === '2') {
                    return true
                }
            }
        }
    ]).then(answer => {
        const optionNum = answer.chooseDepartmentMode.split(/[()]+/)[1]
        departmentHandler(optionNum, answer)
            .then(() => {
                question()
            })
    })
}

const employees = () => {
    return inquirer.prompt([
        {
            name:'chooseEmployeeMode',
            type: 'list',
            message: 'choose an employee mode:',
            choices: ['(1) see all employees', '(2) add an employee', '(3) update employee role']
        },
        {
            name: 'firstName',
            type: 'input',
            message: "what is the employee's name?",
            when: ({ chooseEmployeeMode }) => {
                const option = chooseEmployeeMode.split(/[()]+/)
                if (option[1] === '2') {
                    return true
                }
            }
        },
        {
            name: 'lastName',
            type: 'input',
            message: "what is the employee's last name?",
            when: ({ firstName }) => firstName
        },
        {
            name: 'employeeRole',
            type: 'rawlist',
            message: "what is the employee's role",
            choses: roleNames,
            when: ({ lastName }) => lastName
        },
        {
            name: 'employeeManager',
            type: 'rawlist',
            message: "who is the employee's manager?",
            choices: managerNames,
            when: ({ employeeRole }) => employeeRole
        },
        {   name: 'updateEmployee',
            type: 'rawlist',
            message: 'which employee would you like to update?',
            when: ({ chooseEmployeeMode }) => {
                const option = chooseEmployeeMode.split(/[()]+/)
                if (option[1] === '3') {
                    return true
                }
            }
        },
        {
            name: 'updateRole',
            type: 'rawlist',
            message: "what is the employee's role update?",
            choices: roleNames,
            when: ({ updateEmployee }) => updateEmployee
        },
        {
            
        }
    ])
}