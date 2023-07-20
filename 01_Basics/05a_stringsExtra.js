//Diffrence between string constructor and string function

const val1 = new String('This is a meme')
const val2 = String('This is a meme')

console.log(val1 instanceof String); // true -- because val1 is an object
console.log(val2 instanceof String);// false -- because val2 is a string

console.log(typeof val1); // Object
console.log(typeof val2); // String

// Stringify certain datatypes

const val3 = 1331
console.log(typeof val3); //Stringify

const val4 = String(val3)
console.log(typeof val4);

// to calculate the length of charecters and code units
const val5 = String('Our instructors have real-world knowledge to help you achieve your goals. Courses start at ₹449 until July 21.')

const val6 = String('m = Δy/Δx')

console.log(val6.length);
console.log([...val6].length);

// .at(index)

console.log(val5.at(12)); // 'o'

function getExactVal(arr, x) {
    return arr.at(x)
}

console.log(getExactVal(val5, 12));

//.charAt(index)

console.log(val5.charAt(-2)); // Can't print minus index values
console.log(val5.charAt(val5.length - 2)); // This is the way to get negative index values

// .slice(from,upto)

console.log(val5.slice(21,-13));

// concat()

console.log(val2.concat(val3,' ',val3,' ','Hello, dear'));

//endsWith(endValue)

console.log(val5.endsWith('July 21.')); //true
console.log(val5.endsWith('July 21')); //false

//endsWith(endValue,endPosition)

console.log(val5.endsWith('July 21',val5.length - 1)); // endsWith(endValue,endPosition) -- endPosition means index value of the last charecter -- here it is '1' 

console.log(val5);

console.log(val5.endsWith('knowledge',val5.indexOf('to help') - 1));

//