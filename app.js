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
            message: 'choose a department mode',
            choices: ['(1) see all departments', '(2) add department', '(3) delete department']
        },
        {
            name: 'addDepartment',
            type: 'input',
            message: 'what is your new department called?',
            when ({ chooseDepartmentMode }) => {
                const option = departmentOption.split(/[()]+/)
                if (option[1] === '2') {
                    return true 
                }
            }
        },
        {
            name: 'deleteDepartment',
            type: 'rawlist',
            message: 'choose a department you would like to delete?',
            when ({ chooseDepartmentMode }) => {
                const option = departmentOption.split(/[()]+/)
                if (option[1] === '2') {
                    
                }
            }
        }
    ])
}