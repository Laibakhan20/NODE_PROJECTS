#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Price of first item in cart", type: "number", name: "firstItem" },
    { message: "Price of second item in cart", type: "number", name: "secondItem" },
    { message: "Price of third item in cart", type: "number", name: "thirdItem" },
    {
        message: "Select one of the following operators to perform operation",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//CONDITIONAL STATEMENTS:
if (answer.operators === "Addition") {
    console.log("Your total amount is: ", answer.firstItem + answer.secondItem + answer.thirdItem);
}
else if (answer.operators === "Subtraction") {
    console.log("Your total amount is: ", answer.firstItem - answer.secondItem + answer.thirdItem);
}
else if (answer.operators === "Multiplication") {
    console.log("Your total amount is: ", answer.firstItem * answer.secondItem + answer.thirdItem);
}
else if (answer.operators === "Division") {
    console.log("Your total amount is: ", answer.firstItem / answer.secondItem + answer.thirdItem);
}
else {
    console.log("Please select a valid operator");
}
