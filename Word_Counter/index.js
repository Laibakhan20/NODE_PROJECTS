#! /usr/bin/env node
//import the 'inquirer' module which is a commandline interface for a Node.js.
import inquirer from "inquirer";
import chalk from "chalk";
//print the welcome message on the console.
console.log(chalk.blueBright.underline("\nWelcome to the Word Count App!\n"));
//prompt the user to enter a sentence.
//declare a const 'answers' and assign it to the result of inquirer.prompt function.
const answers = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: chalk.green("\nEnter a sentence to get the word count of the sentence: ")
});
const words = answers.sentence.trim().split(" ");
//prints the array of words.
console.log(words);
//print the word count of the sentence o the console.
console.log(`\nThe word count of the sentence is ${words.length} words.`);
console.log(chalk.blueBright.underline("\nThank You for using the Word Count App!\n"));
