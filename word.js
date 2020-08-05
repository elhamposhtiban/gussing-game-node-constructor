
const Letter = require ("./letter");

function Word (word) {

   this.wordArray = [];

    for (let i=0; i<word.length; i++) {
        //here if there is nothing it will push empty
        
        if (word.charAt(i)===" "){
            this.wordArray.push(" ")
        }
        // here if we have the random word from index file it will transfer
        //the word to the letter.js to display letter or underscore

        else {
            let Answer = new Letter(word.charAt(i))
            this.wordArray.push(Answer)
        }
    }

//here we have the string of random word based on showLetter function in 
//letter.js file
    this.createString = function(){

        let wordString = " ";

        this.wordArray.forEach( function (item){
           if(item === " ") {
               wordString += "  ";
           }
           else {
               wordString += item.showLetter();
           }
        });
        return wordString;
    }


//here we check if the letter for each word is not undefined 
// then pass that letter to the checkGuess function in letter.js
    this.checkGuessWord = function(letterGuess){

        this.wordArray.forEach(function(item){
            
            if(item.letter !== undefined){
               item.checkGuess(letterGuess);
            }
        });
    };

}
module.exports = Word;
