 const word = require("./word");
 const inquirer = require ("inquirer")
 const  chalk = require("chalk");

 const guessWord = ["before sunrise", "titanic", "god father", "oneday", "her", "me before you"]

 let rightAnswer = [];
 let wrongAnswer = [];

 const attempt = 8;

 const index = Math.floor(Math.random()*guessWord.length)

 const randomWord =guessWord[index]
 console.log (index)
 console.log(randomWord)
 




 inquirer.prompt([
     {
         type: "input",
         message: "welcome to gussing game!"+chalk.bold.blueBright.inverse("LETS guess a letters!"),
         name: "startgame"
         
     }
 ])