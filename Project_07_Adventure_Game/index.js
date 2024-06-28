#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//------------------------ games variables ---------------------------------//
let enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
let maxEnemyHealth = 75;
let enemyAttackDamageToHero = 25;
//------------------------ player variables ---------------------------------//
let heroHealth = 100;
let attackDamageToEnemy = 50;
let numHealthPotions = 3;
let healthPotionHealAmount = 30;
let healthPotionDropChance = 50;
//------------------------ while loop condition ---------------------------------//
let gameRunning = true;
console.log(chalk.bold.italic.blueBright("\n------------------------- Welcome, adventurer! ----------------------------"));
Game: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(chalk.bold.magentaBright(`\n# ${enemy} has appeared #`));
    while (enemyHealth > 0) {
        console.log(`\nYour Health: ${chalk.green(heroHealth)}`);
        console.log(`${enemy} Health: ${chalk.green(enemyHealth)}\n`);
        let options = await inquirer.prompt({
            type: "list",
            name: "ans",
            message: (chalk.white("What would you like to do?")),
            choices: ["1. Attack", "2. Drink Health Potion", "3. Run"]
        });
        if (options.ans === "1. Attack") {
            let attackDamageToEnemy = 50;
            let damageToEnemy = Math.floor(Math.random() * attackDamageToEnemy + 1);
            let damageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
            enemyHealth -= damageToEnemy;
            heroHealth -= damageToHero;
            console.log(chalk.blue(`\nYou strike the ${enemy} for ${damageToEnemy} damage.`));
            console.log(chalk.green(`${enemy} strike you for ${damageToHero} damage`));
            if (heroHealth < 1) {
                console.log(chalk.redBright("You have taken to much damage, you are too weak to continue."));
                break;
            }
        }
        else if (options.ans === "2. Drink Health Potion") {
            if (numHealthPotions > 0) {
                heroHealth += healthPotionHealAmount;
                numHealthPotions--;
                console.log(`You drink a health potion, healing yourself for ${healthPotionHealAmount}`);
                console.log(`You now have ${heroHealth} health`);
                console.log(`You have ${numHealthPotions} health potions left`);
            }
            else {
                console.log(chalk.redBright("You have no health potions left. Defeat enemy for get a chance to get health potion!"));
            }
        }
        else if (options.ans === "3. Run") {
            console.log(chalk.redBright(`You runaway from ${enemy}`));
            continue Game;
        }
    }
    if (heroHealth < 1) {
        console.log(chalk.redBright("You are out from battle! You are too weak."));
        break;
    }
    console.log(chalk.bold.redBright(`${enemy} was defeated!`));
    console.log(chalk.bold.redBright(`You have ${heroHealth} health`));
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < healthPotionDropChance) {
        numHealthPotions++;
        console.log(chalk.redBright("enemy give you health potion."));
        console.log(`\nYour health is ${chalk.green(heroHealth)}`);
        console.log(`You have ${chalk.green(numHealthPotions)} health potions\n`);
    }
    let userOption = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: chalk.bold.whiteBright("What would you like to do?"),
        choices: ["1. Continue", "2. Exit Game"]
    });
    if (userOption.ans === "1. Continue") {
        console.log(chalk.bold.magenta("You are continue on your adventure..."));
    }
    else {
        console.log(chalk.bold.magenta("-------- You succesfully exit from deadzone. ---------"));
        break;
    }
    console.log(chalk.bold.magenta("Thank you for playing!"));
}
