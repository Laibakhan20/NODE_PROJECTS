#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue.whiteBright.bold("\nWELCOME TO CURRENCY CONVERTER!"));
//CURRENCY CONVERSION RATES:
const currencyRates = {
    USD: 1.00,
    CAD: 1.35,
    TRY: 32.03,
    PKR: 277.72,
    EUR: 0.92,
    INR: 0.92,
    QAR: 3.64,
    GBP: 0.79,
    SAR: 3.75
};
//PROMPT USER FOR INPUT:
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.red(" \nEnter the currency you want to convert from: "),
        choices: ["USD", "CAD", "TRY", "PKR", "EUR", "INR", "QAR", "GBP"]
    },
    {
        name: "to",
        type: "list",
        message: chalk.blueBright(" \nEnter the currency you want to convert to: "),
        choices: ["USD", "CAD", "TRY", "PKR", "EUR", "INR", "QAR", "GBP"]
    },
    {
        name: "amount",
        type: "number",
        message: chalk.green(" \nEnter your amount to convert: "),
        validate: (input) => {
            if (!isNaN(input)) {
                return true;
            }
            else {
                console.error(chalk.red('\nInvalid input. Please enter a valid numerical amount.'));
                process.exit(1);
            }
        }
    },
]);
//CURRENCY CONVERSION PROCESS:
let fromAmount = currencyRates[userAnswer.from];
let toAmount = currencyRates[userAnswer.to];
let userAmount = userAnswer.amount;
let basedCurrency = userAmount / fromAmount; //based currency is USD
let convertedCurrency = basedCurrency * toAmount;
let roundOff = parseFloat(convertedCurrency.toFixed(2));
console.log(chalk.bgWhite.magentaBright.bold(`\nHere is your conversion result: ${roundOff} ${userAnswer.to}`));
