
 const Letter = require ("./letter");

function Word (word) {

   this.wordArray = [];

    for (let i=0; i<word.length; i++) {
        if (word.charAt(i)===" "){
            this.wordArray.push(" ")
        }
        else {
            let Answer = new Letter(word.charAt(i))
            this.wordArray.push(Answer)
        }
    }

    this.toString = function () {
        return this.wordArray.join(" ");
    }

}
module.exports = Word;