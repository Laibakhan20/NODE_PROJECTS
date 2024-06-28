#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Please enter the countdown duration in seconds: ",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter a valid number";
        }
        else if (input > 60) {
            return "Please enter seconds less than 60";
        }
        else {
            return true;
        }
    }
});
const confirm = await inquirer.prompt({
    name: "confirm",
    type: "confirm",
    message: `You have entered ${res.userInput} seconds. Would you like to start the countdown now?`,
});
//if user does not confirm then exit the program:
if (!confirm.confirm) {
    console.log("Timer not started.");
    process.exit();
}
//variable in which user input is stored:
let input = res.userInput;
//this function will start the timer:
function startTime(val) {
    const iniTime = new Date().setSeconds(new Date().getSeconds() + val); //Sets the seconds value in the Date object using local time.
    const intervalTime = new Date(iniTime); //it will provide current time in current date format.
    setInterval(() => {
        const currentTime = new Date(); //new date object representing current date and time.
        const timeDiff = differenceInSeconds(intervalTime, currentTime); //passing the arguments.
        if (timeDiff <= 0) {
            console.log('Timer has expired!');
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600); //formula for calculating minutes.
        const sec = Math.floor(timeDiff % 60); //formula for calculating seconds.
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`); //toString method Returns a string representation of an object.         
    }, 1000); //it means it refreshes after every 1 second.
}
startTime(input);
////The current date and time can be fetched by first creating a new Date object
//getSeconds: returns the seconds (0-59)
