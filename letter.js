
//here we are creating letters based on what transfer here from word.js
function Letter (letter) {
    this.letter = letter;

    this.guessed = false 

    this.showLetter = function () {
        //here if any guess from user is exist its return the letter
        // and we can see on the cli
        if (this.guessed) {
            return this.letter + " ";
        }
        
        else 
        {
            return "_ "
        }
    }
    
    this.checkGuess = function(guess) {
        if(guess === this.letter) {
            this.guessed = true;
        }
        
    };
}

module.exports = Letter;