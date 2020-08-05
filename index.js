
//all the require is here 
 const word = require("./word");
 const inquirer = require ("inquirer")
 const  chalk = require("chalk");

 // regular expressions helps us to have lowercase and uppercase letter  

const lettersArray = /[A-Za-z]/

 const movieWord = ["before sunrise", "titanic", "god father", "oneday",
  "her", "me before you", "installer", "jocker"]


  // function that run all the app : 
  // here we have our random word and then we pass it to the word.js file
function play () {

  
    const index = Math.floor(Math.random()*movieWord.length)

    const randomWord =movieWord[index]

    let guessMovie = new word (randomWord)

    attempt = 8;

    guessWord(guessMovie, randomWord)
    
}

// here the user will guess the word 

function guessWord(guess, actual){

    let completeMovie = []; 
    let guessArr = [];

    //Shows the word being guessed, initially as underscores. The underscores will be replaced by letters when they are guessed
    console.log("\n" + guess.createString() + "\n")
 
    inquirer.prompt([
 
         {
             type: "input",
             message:chalk.yellow.inverse("welcome to gussing game!")+chalk.bold.blueBright.inverse("LETS guess a letters!"),
             name: "userguess"
             
         }
 
     ]).then(function(answer){
 
        guess.checkGuessWord(answer.userguess);
        guess.wordArray.forEach(function (item) {

            completeMovie.push(item.letter);
            guessArr.push(item.guessed);
        });
        if(completeMovie.indexOf(answer.userguess) > -1){
            console.log("")
            console.log(chalk.green.inverse("CORRECT!!!"));
        }
        else{
            console.log("");
            console.log(chalk.inverse.red("Incorrect!"));
            attempt--;
            console.log(chalk.red(`You have ${attempt} tries remaining.`))
        }

        //If the word is not fully guessed and the player still has tries available, then the function asks for another letter
        //by calling itself
        if (guessArr.indexOf(false) > -1 && attempt > 0) {
            guessWord(guess, actual);
        }
        else {


        // will Show the correct word whether the user won or lost
            

            if (attempt === 0) {

                console.log("\n" + chalk.inverse.red("####OoOoOoOpppss ..You lose!!####") + "\n")
                console.log(chalk.yellow.bold.cyan("The word was "+ actual));
            }
            else {
                console.log("\n" + chalk.inverse.magenta("********CoNgRaTuLaTiOn!********")+ "\n" )
                console.log(chalk.yellow.inverse("The word was "+ actual) + "\n");
                
            };

            //Then ask if the user wants to play again.
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "playAgain",
                    message: chalk.cyan.inverse("Do you wanna play again?"),
                    default: true
                }
                
            ]).then(function(answer){
                //If yes, a new game starts.
                if(answer.playAgain){
                    play();
                }
                //If not, the program stops.
                else{
                    process.exit();
                }
            });
        };
    })
}

play()



