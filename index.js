 const word = require("./word");
 const inquirer = require ("inquirer")
 const  chalk = require("chalk");

 guessWord = ["before sunrise", "titanic", "god father", "oneday", "her", "me before you"]



 inquirer.prompt([
     {
         type: "input",
         message: "welcome to gussing game!"+chalk.bold.blueBright.inverse("LETS guess a letters!"),
         name: "startgame"
         
     }
 ])