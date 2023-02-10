const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  let sumsum = 0;
	for (i=0; i<array.length; i++) {
    sumsum += array[i];
  }
  return sumsum;
};

const multiply = function(array) {
  let sumsum = 1;
  for (i=0; i<array.length;i++){
    sumsum *= array[i];
  }
  return sumsum;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(number) {
  let sumsum = 1;
	for (i = number; i > 0; i--){
    sumsum *= i;
  }
  return sumsum;
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
