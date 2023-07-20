const val1 = 112;
console.log(val1); // Value is printed without datatype

const val2 = new Number(133);
console.log(val2); // Value is printed in an object that includes datatype

// Stringify and than we can convert to number, because of shortage of prototype properties in number

const val3 = String(val2)

console.log(val3.concat(val1)); // After stringify --- all properties of string can be applied
console.log(val3.split(2));
console.log(val3.toFixed(1));

// Using