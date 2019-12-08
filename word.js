
letter = require ("./letter");

function Word (word) {

   this.wordArray = [];

    for (let i=0; i<word.length; i++) {
        if (word.charAt(i)===" "){
            this.wordArray.push(" ")
        }
        else {
            this.wordArray.push(new Letter(word.charAt(i)))
        }
    }


}
module.exports = Word;