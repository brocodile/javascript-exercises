const add = function(a,b) {
  return a+b;	
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
  return arr.reduce((accm, val) => accm+val, 0);	
};

const multiply = function(arr) {
  return arr.reduce((accm, val) => accm*val, 1);
};

const power = function(num, pow) {
  return num ** pow;	
};

const factorial = function(num) {
  if(num == 0) return 1;
  // return num * factorial(num-1);	 // recursive solution
  // Iterative solution
  let res = 1;
  while(num > 0){
    res *= num;
    num--;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
