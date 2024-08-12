const repeatString = function(word, n) {
    if (n < 0){
        return 'ERROR';
    }
    let newWord = '';
    while(n > 0){
        newWord += word;
        n--;
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
