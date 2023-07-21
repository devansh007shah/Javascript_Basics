// const val1 = 112;
// console.log(val1); // Value is printed without datatype

// const val2 = new Number(133);
// console.log(val2); // Value is printed in an object that includes datatype

// Stringify and than we can convert to number, because of shortage of prototype properties in number

// const val3 = val1.toString()
// console.log(val3);

// console.log(val3.concat(val2)); // After stringify --- all properties of string can be applied
// console.log(val3.split(2));
// // console.log(val2.toPrecision(5));

// const val5 = 12211221
// console.log(val5.toLocaleString());


// ++++++++++++  MATH  ++++++++++++

// console.log(Math.PI); //Value of PI
// console.log(Math.abs(-21));
// console.log(Math.floor(32.13));
// console.log(Math.ceil(32.13));
// console.log(Math.round(32.62));

// console.log(Math.min(12,32,43,1));

console.log(Math.random()); //Value lies between 0 - 1
console.log(Math.floor(Math.random()*10)+1); // values from 1-10

//For values 10 -20

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max-min+1)) + min); // find on stackoverflow