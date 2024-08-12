const removeFromArray = function(nums, ...args) {
    let i = 0;
    for(let i = 0; i<args.length;i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[j] === args[i]){
                nums.splice(j, 1);
                j -= 1;
            }
        }
    }
    return nums;
};

// Do not edit below this line
module.exports = removeFromArray;
