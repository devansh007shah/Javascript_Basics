// let name = 'dev'
// let foodCount = 21

// console.log(`Hi myu name is ${name} and my customer base is ${foodCount}`);

// // To declare a new string 

// const changeName = new String('devanshDeveloper') // String is called as a contructor

// console.log(changeName); // When published in console --- the String is structurally well defined because we have used constructor here 

// //Also we can see the length of charecters in string, here String itself is an object but value of this string is defined in the form of key-value pairs

// // Also we can view the types of methods that can be used to manipulate the string here

// console.log(changeName[0]); // Here we can get the first value in the string

// console.log(changeName.__proto__); // Here we can access the prototype functions available to manipulate the string

// console.log(changeName.length);
// console.log(changeName.toUpperCase());
// console.log(changeName.charAt(3));
// console.log(changeName.indexOf('r'));

// console.log(changeName.substring(0,4)); // we can't use '-' indexes to get substring
// console.log(changeName.slice(4,-1)); // use of '-'index is permitted

// const anotherVal = '   Devansh  '
// console.log(anotherVal);
// console.log(anotherVal.trim());

// const url = "http://devansh.com/devansh%20shah"
// console.log(url.replace('devansh','devanshDeveoper'));
// console.log(url);

// console.log(url.includes('shah'));

const letterOne = "A string representing str stripped of whitespace from both its beginning and end. Whitespace is defined as white space characters plus line terminators. If neither the beginning or end of str has any whitespace, a new string is still returned (essentially a copy of str)."

console.log(letterOne.split(' ').length); //to calculate nos of words


// ----------- Merging Heap Memory --------- 

// let compName = new String('Kencys Inc')

// let newComp = compName

// newComp = newComp.toUpperCase

// console.log(compName.substring(0,4));
// console.log(newComp.slice());
