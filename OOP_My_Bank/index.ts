import { faker } from "@faker-js/faker";
import inquirer from "inquirer";
import chalk from "chalk";

//creating class of customer:
class Customer {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  mobileNumber: number;
  accountNumber: number;

  constructor(
    fname: string,
    lname: string,
    age: number,
    gender: string,
    mmobnumber: number,
    accnumber: number
  ) {
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.gender = gender;
    this.mobileNumber = mmobnumber;
    this.accountNumber = accnumber;
  }
}

//interface for bank account:
interface BankAccount {
  accountNumber: number;
  balance: number;
}

//class for saving account
class Bank {
  customers: Customer[] = [];
  accounts: BankAccount[] = [];

  addCustomer(obj: Customer) {
    this.customers.push(obj);
  }

  addAccountNumber(obj: BankAccount) {
    this.accounts.push(obj);
  }
  //method for account updation
  transaction(accObj: BankAccount) {
    let newAccount = this.accounts.filter(
      (acc) => acc.accountNumber !== accObj.accountNumber
    );
    this.accounts = [...newAccount, accObj];
  }
}

//creating my bank:
let myBank = new Bank();

//creating a customer:
for (let i: number = 1; i <= 10; i++) {
  let fname = faker.person.firstName("male");
  let lname = faker.person.lastName();
  let num = parseInt(faker.string.numeric("501-###-###")); //parseint is a building function which converts string into the number.
  const cus = new Customer(fname, lname, 25 * i, "male", num, 1000 + i); //25*i= 25*1=25, 25*2=50 ,...
  //1000+i= 10001, 10002, 10003...
  myBank.addCustomer(cus);
  myBank.addAccountNumber({
    accountNumber: cus.accountNumber,
    balance: 10000 * i,
  });
}

//Bank Functionality:
async function bankService(bank: Bank) {
  do {
    let service = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Please select the service:",
        choices: ["View Account Balance", "Cash Withdraw", "Cash Deposit", "Exit"],
      });
    
      //for view account balance:
      if (service.select == "View Account Balance") {
        let res = await inquirer.prompt({
          name: "accNum",
          type: "input",
          message: "Please enter your account number:",
        });
        //checking if account number exists or not:
        let account = myBank.accounts.find(
          (acc) => acc.accountNumber == res.accNum
        );
        if (!account) {
          console.log("Invalid account number. Account not found");
        }
        if (account) {
          //making function to find customer:
          let name = myBank.customers.find(
            (item) => item.accountNumber == account?.accountNumber
          ); //?:existornot
          console.log(
            `Dear ${chalk.bold.blueBright(name?.firstName)} ${chalk.blue.bold(
              name?.lastName
            )}, Your account balance is: ${chalk.green(`$${account.balance}`)}`
          );
        }
      }
    
      //for cash withdraw:
      if (service.select == "Cash Withdraw") {
        let res = await inquirer.prompt({
          name: "accNum",
          type: "input",
          message: "Please enter your account number:",
        });
        //checking if account number exists or not:
        let account = myBank.accounts.find(
          (acc) => acc.accountNumber == res.accNum
        );
        if (!account) {
          console.log("Invalid account number. Account not found");
        }
        if (account) {
          let ans = await inquirer.prompt({
            name: "rupee",
            type: "input",
            message: "Please enter the amount to withdraw:",
          });
          let newBalance = account.balance - ans.rupee;
    
          //transiction method call:
          bank.transaction({
            accountNumber: account.accountNumber,
            balance: newBalance,
          });
        }
      }
    
      //for cash deposit:
      if (service.select == "Cash Deposit") {
        let res = await inquirer.prompt({
          name: "accNum",
          type: "input",
          message: "Please enter your account number:",
        });
        //checking if account number exists or not:
        let account = myBank.accounts.find(
          (acc) => acc.accountNumber == res.accNum
        );
        if (!account) {
          console.log("Invalid account number. Account not found");
        }
        if (account) {
          let ans = await inquirer.prompt({
            name: "rupee",
            type: "number",
            message: "Please enter the amount to deposit:",
          });
        
          if (ans.rupee > account.balance) {
            console.log(chalk.red.blue("Your balance is insufficient."));
          }

          const newBalance = ans.rupee + account.balance ;
    
          //transiction method call:
          bank.transaction({
            accountNumber: account.accountNumber,
            balance: newBalance,
          });
        }
      }
      
      //for exit:
      if (service.select == "Exit") {
        console.log("Thank you for using our service.");
        return;
      }

  } while (true);
}
//calling bankservice function:
bankService(myBank);
