const palindromes = function (word) {
    // Solution 1 :
    // const avoid = ' !,.';
    // let i = 0;
    // let j = word.length - 1;
    // while(i<j){
    //     while(i<j && avoid.includes(word[i])) i++;
    //     while(i<j && avoid.includes(word[j])) j--;
    //     if(word[i].toLowerCase() != word[j].toLowerCase()) return false;
    //     i++;
    //     j--;
    // }
    // return true;

    // Solution2
    const valid = "abcdefghijklmnopqrstuvwxyz0123456789";
    let condensed = word.toLowerCase().split("").filter(val => valid.includes(val)).join();
    const reversed = condensed.split('').reverse().join('');
    return reversed == condensed;
};

// Do not edit below this line
module.exports = palindromes;
