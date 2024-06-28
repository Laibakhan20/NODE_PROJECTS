#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//creating class of student
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
//creating class of person
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj); //userinput in obj will push into the Student array.
    }
}
//initiating Person's array
const persons = new Person();
//making function:
const programStart = async (persons) => {
    do {
        console.log(chalk.bold.blueBright("\n<<<<<<<<< Welcome! >>>>>>>>>>\n"));
        const answers = await inquirer.prompt({
            name: "choice",
            type: "list",
            message: chalk.magentaBright("Whom would you want to interact with?"),
            choices: ["administrator", "student", "exit"]
        });
        if (answers.choice == "administrator") {
            console.log(chalk.green("\nYou approach the administrator, feel free to ask any concerns you may have."));
        }
        else if (answers.choice == "student") {
            const stdAns = await inquirer.prompt({
                name: "studentName",
                type: "input",
                message: "\nEnter the student's name you want to engage with."
            });
            //creating variable to find that name wich is input by user already exists or not:
            const findStd = persons.students.find(value => value.name == stdAns.studentName);
            //if user input name is not in the array then it will push into the array.
            if (!findStd) {
                const newStd = new Student(stdAns.studentName);
                persons.addStudent(newStd);
                console.log(chalk.greenBright(`\nHi, I am ${chalk.magentaBright(stdAns.studentName)}. Nice to meet you!`));
                console.log('\nNew student added.');
                console.log(chalk.bold.blueBright('\nCurrent student list:'));
                console.log(persons.students);
            }
            else {
                console.log(chalk.greenBright(`\nHi, I am ${chalk.magentaBright(stdAns.studentName)}. Nice to meet you again!`)); //if student exists in the array already.
                console.log(chalk.bold.blueBright('\nExisting student list:'));
                console.log(persons.students);
            }
        }
        else if (answers.choice == "exit") {
            console.log(chalk.redBright("\nExiting the program..."));
            process.exit(0);
        }
    } while (true);
};
programStart(persons);
