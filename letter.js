function Letter (letter) {
    this.letter = letter;
    this.guess = false 
    this.creatUnderscore = function () {
        if (this.letter) {
            return this.letter + " ";
        }
        else 
        {
            return "_"
        }
    }
    
    this.checkGuess = function(guess) {
        if(guess === this.letter) {
            this.guessed = true;
        }
        
    };
}

module.exports = Letter;