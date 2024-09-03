const fibonacci = function(val) {
    if(typeof val == "string"){
        val = parseInt(val);
    }
    if(val < 0){
        return "OOPS";
    }
    if(val == 0){
        return 0;
    }

    let first = 1;
    let second = 1;
    for(let i=2; i < val;i++){
        [first, second] = [second, first+second];
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
