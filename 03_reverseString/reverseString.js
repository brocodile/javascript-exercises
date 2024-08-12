const reverseString = function(word) {
    let newWord = '';
    for (i = word.length - 1; i > -1; i--){
        newWord += word[i];
    }
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
