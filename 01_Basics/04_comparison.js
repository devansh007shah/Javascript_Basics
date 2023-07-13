//Comparison Operator converts strings to number


console.log("2" == 2); // Converts string to number for ==
console.log("2" > 2); // Converts string to number for ==
console.log("2" < 2); // Converts string to number for ==
console.log("2" >= 2); // Converts string to number for ==
console.log("2a" <= 2); // Converts string to number for ==

//For '==' equality check comparison operator doesn't convert 'NULL' to '0' 
console.log(null == 0); // Converts string to number for ==


//For '<','>','<=','>=' comparison operator convert 'NULL' to '0' 
console.log(null > 0); // Converts string to number for ==
console.log(null < 0); // Converts string to number for ==
console.log(null >= 0); // Converts string to number for ==

// For comparison between null and boolean

console.log(null>=false); // conversion happens on both ends


// ==================----------------===============

// === Strict equal case
console.log(null === 0); // Converts string to number for === -- here it converts but also compares the datatype of the function

console.log(null === false); // Converts string to number for === - but datatype is also compared

