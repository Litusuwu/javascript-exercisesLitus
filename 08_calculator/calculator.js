const add = function(a, b) {
  return a + b;
};

const subtract = function(a , b) {
	return a - b;
};

const sum = function(arreglo) {
	if(arreglo.length == 0) return 0;
  else{
    let max = 0;
    for(let i = 0 ; i < arreglo.length ; i++){
      max += arreglo[i];
    }
    return max;
  }
};

const multiply = function(arreglo) {
  var max = 1;
  for(var i = 0 ; i < arreglo.length ; i++){
    max *= arreglo[i];
  }
  return max;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  let max = 1;
  for(let i = 1 ; i <= a ; i++){
    max *=i;
  }
  return max;
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
