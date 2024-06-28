#! /usr/bin/env node


import inquirer from "inquirer"
import chalk from "chalk"

//define the student class:
class Student {
    static counter = 10000
    id: number;
    name: string;
    courses: string[];
    balance: number;
    
    constructor(name: string) {
        this.id = Student.counter++ ;
        this.name = name;
        this.courses = [];                 //initialize an empty array for courses
        this.balance = 1000;
        
    }

    //method to enroll a student in a course: 
enroll_course(course: string){
    this.courses.push(course);
}

//method to view student balance:
view_balance(){
    console.log(`Balance for ${this.name} is $${this.balance}`);
}

//method to pay student's fees:
pay_fees(amount: number){
    this.balance -= amount;
    console.log(chalk.italic(`\n$${amount} fees paid successfully for ${this.name}`));   
    console.log(`Remaining balance: $${this.balance}`);
    
}

//show status:
show_status(){
    console.log(chalk.blue(`ID: ${this.id}`));
    console.log(chalk.blue(`Name: ${this.name}`));
    console.log(chalk.blue(`Courses: ${this.courses}`));
    console.log(chalk.blue(`Balance: ${this.balance}`));

}

}


//making class of student_manager to manage students:
class student_manager {
    students : Student[]


    constructor() {
        this.students = [];
        
    }

    //method to add new students and also we are applying (OOP) Inheritence concept:
    add_students(name: string){
        let addStudent = new Student(name);
        this.students.push(addStudent);
        console.log(chalk.bold.italic(`\nStudent ${name} added successfully! Student ID: ${addStudent.id}`));
    
    }

    //method to enroll a student in a course, first we find student and then enrolled him.:
    enroll_student(student_id: number, course: string){
       let foundStudent = this.find_student(student_id);
       if (foundStudent) {
        foundStudent.enroll_course(course);
        console.log(chalk.bold.italic(`\n${student_id} ${foundStudent.name} enrolled in ${course} successfully`));      
       }else{
        console.log(chalk.red("\nStudent not found.Please enter a valid student ID."));
       }
    }

    //method to view student balance:
    view_student_balance(student_id: number){
        let foundStudent = this.find_student(student_id);
        if (foundStudent) {
            foundStudent.view_balance();
        }else{
            console.log(chalk.red("\nStudent not found.Please enter a valid student ID."));
            
        }

    }


    //method to pay student's fees:
    pay_student_fees(student_id: number, amount: number){
        let foundStudent = this.find_student(student_id);
        if (foundStudent) {
            foundStudent.pay_fees(amount);
        }else{
            console.log(chalk.red("\nStudent not found.Please enter a valid student ID."));
        }
        
    }

    //method to show status of student:
    show_status(student_id: number){
        let foundStudent = this.find_student(student_id);
        if (foundStudent) {
            foundStudent.show_status();
        }else{
            console.log(chalk.red("\nStudent not found.Please enter a valid student ID."));
        }
    }


    //method to find a student by student_id:
    find_student(student_id: number){
        return this.students.find(std => std.id === student_id);
    }
}


//Main function to run the program:

async function main(){
    console.log(chalk.bold.blueBright("\n\tWelcome to 'TechAcademy' - Student Management System "));
    console.log("-".repeat(55));
    
    let studentManager = new student_manager();

    //while loop to keep program running
    while (true) {
        let choices = await inquirer.prompt([{
            type: "list",
            name: "choice",
            message: chalk.magentaBright("\n\tSelect an option: "),
            choices: ["Add Student", "Enroll Student", "View Student Balance", "Pay Student Fees", "Show Status", "Exit"]
        }
    ]);

    //using switch case to handle user's choice:

    switch(choices.choice){
        case "Add Student": 
            let name_input = await inquirer.prompt([
                {
                type: "input",
                name: "name",
                message: "\n\tEnter student name: "
                }
            ]);
            studentManager.add_students(name_input.name);
            break;
          
        
        case "Enroll Student":
            let courseInput = await inquirer.prompt([
                {
                name: "student_id",
                type: "number",
                message: "\nEnter student ID:"
                },
                {
                    name: "course",
                    type: "checkbox",
                    message: "\nSelect courses: ",
                    choices: ["Python", "HTML / CSS", "JavaScript", "C++", "Java", "C#", "PHP"]
                    
                }
            ]);
            studentManager.enroll_student(courseInput.student_id, courseInput.course);
            break;

        case "View Student Balance":
            let balanceInput = await inquirer.prompt([
                {
                    name: "student_id",
                    type: "number",
                    message: "\nEnter student ID:"
                }
            ]);
            studentManager.view_student_balance(balanceInput.student_id);
            break;

        case "Pay Student Fees":
            let payFeesInput = await inquirer.prompt([
                {
                    name: "student_id",
                    type: "number",
                    message: "\nEnter student ID:"
                },
                {
                    name: "amount",
                    type: "number",
                    message: "\nEnter amount to pay:"
                }
            ]);
            studentManager.pay_student_fees(payFeesInput.student_id, payFeesInput.amount)
            break;
            
        case "Show Status":
            let statusInput = await inquirer.prompt([
                {
                    name: "student_id",
                    type: "number",
                    message: "\nEnter student ID:"
                }
            ]);
            studentManager.show_status(statusInput.student_id);
            break;

        case "Exit":
            console.log(chalk.bold("\n\tExiting......"));
            process.exit()
        
    }
    
    } 
}


//calling the main function:
main();
