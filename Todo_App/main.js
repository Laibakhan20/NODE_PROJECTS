#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.magentaBright('\n<<<<<<< Welcome to my Todo App! >>>>>>>\n'));
let todos = [];
let condition = true;
while (condition) {
    let todoList = await inquirer.prompt([
        {
            name: "todo",
            type: "list",
            message: chalk.italic.blue("\nWhat do you want to do?"),
            choices: ["Add Todo", "Remove Todo", "View Todo", "Exit"]
        },
    ]);
    if (todoList.todo === "Add Todo") {
        let addTask = await inquirer.prompt([{
                name: "todos",
                type: "input",
                message: chalk.italic.blue("\nWhat are the top priorities for today? "),
            },
            {
                name: "addMore",
                type: "confirm",
                message: chalk.italic.blue("\nDo you want to add more todo? "),
                default: "false",
            }]);
        todos.push(addTask.todos);
        condition = addTask.addMore;
        console.log(todos);
    }
    else if (todoList.todo === "Remove Todo") {
        let removeTask = await inquirer.prompt([
            {
                name: "remove",
                type: "input",
                message: chalk.italic.blue("\nWhich task do you want to remove? "),
            }
        ]);
        todos.splice(todos.indexOf(removeTask.remove), 1);
        console.log(todos);
        break;
    }
    else if (todoList.todo === "View Todo") {
        console.log(todos);
        break;
    }
    else if (todoList.todo === "Exit") {
        break;
    }
}
