#! /usr/bin/env node
import inquirer from "inquirer";
let myAccountBalance = 15000;
let myAccountPin = 7878;
console.log("\nWelcome! to the ATM.");
let userAuthentication = await inquirer.prompt([
    {
        name: "userPin",
        message: " \nplease enter your PIN code:",
        type: "number"
    }
]);
if (userAuthentication.userPin === myAccountPin) {
    console.log(" \nThankyou for providing the correct pin code."),
        console.log("You are now authenticated!\n");
    let transactionAns = await inquirer.prompt([{
            name: "transactionType",
            message: "\nplease select the transaction : ",
            type: "list",
            choices: ["withdrawal", "deposit", "check balance", "fast cash"]
        }]);
    console.log(transactionAns);
    if (transactionAns.transactionType === "withdrawal") {
        let withdrawalAns = await inquirer.prompt([{
                name: "amount",
                message: "\nplease enter withdrawal amount in multiples of 10: ",
                type: "number"
            }]);
        if (withdrawalAns.amount <= myAccountBalance) {
            myAccountBalance -= withdrawalAns.amount;
            console.log(`Your remaining account balance is: ${myAccountBalance}`);
        }
        else {
            console.log("\nYour requested withdrawal amount cannot be processed due to insufficient balance.");
        }
    }
    else if (transactionAns.transactionType === "deposit") {
        let depositAns = await inquirer.prompt([{
                name: "amount",
                message: "please enter the amount you like to deposit: ",
                type: "number"
            }]);
        console.log("\nDeposit complete! ");
        myAccountBalance += depositAns.amount;
        console.log(`Your balance is now: ${myAccountBalance}`);
    }
    else if (transactionAns.transactionType === "check balance") {
        console.log(`Your current balance in your account is: ${myAccountBalance}`);
    }
    else if (transactionAns.transactionType === "fast cash") {
        console.log(`\nFast Cash limit: $5000 per transaction. `);
        let fastCashAns = await inquirer.prompt([{
                name: "yourAmount",
                message: "\nselect amount\n",
                type: "list",
                choices: ["$500", "$600", "$700", "$800", "$900", "$1000", "$2000", "$3000", "$4000", "$5000"]
            }]);
        console.log("Your Fast Cash withdrawal was successful.");
        console.log("Please take your cash and any receipt. Thank you for using our ATM.");
    }
    ;
}
else {
    console.log("\nInvalid PIN code!"),
        console.log("Please try again.\n");
}
