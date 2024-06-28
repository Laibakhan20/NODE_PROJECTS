#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\n----------------------------- Welcome to the Quiz ------------------------------"));
let score = 0;
// prompt for name and topic:
let userInput = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Enter your name:"
    },
    {
        name: "topics",
        type: "list",
        message: "Select your topic:",
        choices: ["HTML/CSS", "JavaScript", "TypeScript"]
    }
]);
console.log(chalk.magenta("\nTo win, you must answer at least 5 out of the 7 questions correctly.\n"));
//////////////////////////////////// HTML/CSS QUIZ ////////////////////////////////////////////////////////////////////
if (userInput.topics === "HTML/CSS") {
    let question1Html = await inquirer.prompt([{
            name: "q1html",
            type: "list",
            message: "Q1: What is the largest heading tag in HTML?",
            choices: ["h1", "h2", "h3", "h4"],
        },
        {
            name: "q2html",
            type: "list",
            message: "Q2: What is the correct HTML element for inserting a line break?",
            choices: ["<br>", "<lb>", "<break>", "<linebreak>"]
        },
        {
            name: "q3html",
            type: "list",
            message: "Q3: What is the correct HTML element for creating a hyperlink?",
            choices: ["<a>", "<link>", "<url>", "<href>"]
        },
        {
            name: "q4html",
            type: "list",
            message: "Q4: Which property is used to specify the space between the element border and the element content ",
            choices: ["margin", "padding", "border", "spacing"]
        },
        {
            name: "q5html",
            type: "list",
            message: "Q5: Which tag is used to define the document type and version of HTML?",
            choices: ["<DOCTYPE>", "<doctype>", "<html>", "<HTML>"]
        },
        {
            name: "q6html",
            type: "list",
            message: "Q6: Which selector is used to select elements with a specific class in CSS?",
            choices: [".", "#", "*", "class"]
        },
        {
            name: "q7html",
            type: "list",
            message: "Q7: Which attribute is used to specify the URL of an image in CSS?\n",
            choices: ["src", "href", "alt", "url"]
        }
    ]);
    if (question1Html.q1html === "h1") {
        console.log(chalk.green("Q1: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q1: Incorrect"));
    }
    if (question1Html.q2html === "<br>") {
        console.log(chalk.green("Q2: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q2: Incorrect"));
    }
    if (question1Html.q3html === "<a>") {
        console.log(chalk.green("Q3: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q3: Incorrect"));
    }
    if (question1Html.q4html === "padding") {
        console.log(chalk.green("Q4: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q4: Incorrect"));
    }
    if (question1Html.q5html === "<DOCTYPE>") {
        console.log(chalk.green("Q5: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q5: Incorrect"));
    }
    if (question1Html.q6html === ".") {
        console.log(chalk.green("Q6: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q6: Incorrect"));
    }
    if (question1Html.q7html === "src") {
        console.log(chalk.green("Q7: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q7: Incorrect"));
    }
    if (score >= 5) {
        console.log(chalk.blue("*** RESULT ***"));
        console.log(`\nName: ${userInput.name}`);
        console.log(`Your Score: ${score} out of 7.`);
        console.log(chalk.green("Congratulations! You have win the quiz.\n"));
    }
    else {
        console.log(chalk.blue("\n*** RESULT ***"));
        console.log(`Your Score: ${score} out of 7.`);
        console.log(chalk.red("Sorry, you have loss the quiz.\n"));
    }
}
///////////////////////////////////////// JAVASCRIPT QUIZ /////////////////////////////////////////////////////////////
if (userInput.topics === "JavaScript") {
    let questionJs = await inquirer.prompt([{
            name: "q1js",
            type: "list",
            message: "Q1: How do you add an element to the end of an array?",
            choices: ["push()", "pop()", "shift()", "unshift()"],
        },
        {
            name: "q2js",
            type: "list",
            message: "Q2:How do you write an (if) statement in JavaScript?",
            choices: ['if (x == 5)', 'if x == 5 then', 'if x = 5', 'if x == 5 do']
        },
        {
            name: "q3js",
            type: "list",
            message: "Q3: Which of the following is a correct way to declare a JavaScript variable?",
            choices: ['var myVar;', 'variable myVar;', 'v myVar;', 'myVar var;']
        },
        {
            name: "q4js",
            type: "list",
            message: "Q4: How do you create a function in JavaScript?",
            choices: ['function myFunction()', 'function:myFunction()', 'function = myFunction()']
        },
        {
            name: "q5js",
            type: "list",
            message: "Q5: Which event occurs when the user clicks on an HTML element?",
            choices: ['onchange', 'onmouseover', 'onmouseclick', 'onclick']
        },
        {
            name: "q6js",
            type: "list",
            message: "Q6: Which of the following is a feature introduced in ES6?",
            choices: ['var keyword', 'Arrow functions', 'for loop', 'while loop']
        },
        {
            name: "q7js",
            type: "list",
            message: "Q7: JavaScript is a _________ like synchronous but also non-blocking like asynchronous\n",
            choices: ["single-threaded", "double-threaded", "triple-threaded", "none of the above"]
        }
    ]);
    if (questionJs.q1js === "push()") {
        console.log(chalk.green("Q1: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q1: Incorrect"));
    }
    if (questionJs.q2js === "if (x == 5)") {
        console.log(chalk.green("Q2: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q2: Incorrect"));
    }
    if (questionJs.q3js === "var myVar") {
        console.log(chalk.green("Q3: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q3: Incorrect"));
    }
    if (questionJs.q4js === "function myFunction()") {
        console.log(chalk.green("Q4: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q4: Incorrect"));
    }
    if (questionJs.q5js === "onclick") {
        console.log(chalk.green("Q5: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q5: Incorrect"));
    }
    if (questionJs.q6js === "Arrow functions") {
        console.log(chalk.green("Q6: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q6: Incorrect"));
    }
    if (questionJs.q7js === "single-threaded") {
        console.log(chalk.green("Q7: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q7: Incorrect"));
    }
    if (score >= 5) {
        console.log(chalk.blue("\n*** RESULT ***"));
        console.log(`Name: ${userInput.name}`);
        console.log(`Your Score: ${score} out of 7.`);
        console.log(chalk.green("Congratulations! You have win the quiz.\n"));
    }
    else {
        console.log(chalk.blue("\n*** RESULT ***"));
        console.log(`\nYour Score: ${score} out of 7.`);
        console.log(chalk.red("Sorry, you have loss the quiz.\n"));
    }
}
///////////////////////////////////////////// TYPESCRIPT QUIZ ////////////////////////////////////////////////////////
if (userInput.topics === "TypeScript") {
    let questionTs = await inquirer.prompt([{
            name: "q1ts",
            type: "list",
            message: "Q1: Which command is used to compile TypeScript files?",
            choices: ['tsc', 'typescript', 'compile', 'tscompile'],
        },
        {
            name: "q2ts",
            type: "list",
            message: "Q2: How do you define a class in TypeScript?",
            choices: ['class MyClass {}', 'function MyClass() {}', 'type MyClass = {};', 'interface MyClass {}']
        },
        {
            name: "q3ts",
            type: "list",
            message: "Q3: Which file is used to configure TypeScript compiler options?",
            choices: ['tsconfig.json', 'package.json', 'tsconfig.js', 'tsconfig.ts']
        },
        {
            name: "q4ts",
            type: "list",
            message: "Q4: Which syntax is used for type assertion in TypeScript?",
            choices: ['<>', '()', '{}', '[]']
        },
        {
            name: "q5ts",
            type: "list",
            message: "Q5: How do you define an optional parameter in a TypeScript function?",
            choices: ['param?: type', 'param: type', 'param! type', 'param? type']
        },
        {
            name: "q6ts",
            type: "list",
            message: "Q6: Which keyword is used to declare a namespace in TypeScript?'",
            choices: ['namespace', 'module', 'import', 'export']
        },
        {
            name: "q7ts",
            type: "list",
            message: "Q7: What file extension is used for compiled TypeScript files?\n",
            choices: [".txt", ".css", ".js", ".ts"]
        }
    ]);
    if (questionTs.q1ts === "tsc") {
        console.log(chalk.green("Q1: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q1: Incorrect"));
    }
    if (questionTs.q2ts === "class MyClass {}") {
        console.log(chalk.green("Q2: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q2: Incorrect"));
    }
    if (questionTs.q3ts === "tsconfig.json") {
        console.log(chalk.green("Q3: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q3: Incorrect"));
    }
    if (questionTs.q4ts === "<>") {
        console.log(chalk.green("Q4: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q4: Incorrect"));
    }
    if (questionTs.q5ts === "param?: type") {
        console.log(chalk.green("Q5: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q5: Incorrect"));
    }
    if (questionTs.q6ts === "namespace") {
        console.log(chalk.green("Q6: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q6: Incorrect"));
    }
    if (questionTs.q7ts === ".ts") {
        console.log(chalk.green("Q7: Correct"));
        score++;
    }
    else {
        console.log(chalk.red("Q7: Incorrect"));
    }
    if (score >= 5) {
        console.log(chalk.blue("\n*** RESULT ***"));
        console.log(`Name: ${userInput.name}`);
        console.log(`Your Score: ${score} out of 7`);
        console.log(chalk.green("Congratulations! You have win the quiz.\n"));
    }
    else {
        console.log(chalk.blue("\n*** RESULT ***"));
        console.log(`\nYour Score: ${score} out of 7.`);
        console.log(chalk.red("Sorry, you have loss the quiz.\n"));
    }
}
/////////////////////////   WRAP      ////////////////////////////
