'use strict'; //treats all JS code as a new version
// alert(21+12); // Won't work here because of NODE JS extension .. alert is a DOM method

console.log(3 +
    3)
console.log('Dev') // readability is also veryu important -- code will be executed but 0 marks for presentation

//DOCUMENTATION -- 1) MDN docs -- by Mozilla & 2) tc39.es -- by ECMA 

//DATATYPES 

const data1 = 21 //Number -- upto 2^53 is the memory package size allowed in number
const data2 = '' //String 
const data3 = true // Boolean 
const data4 = 9999999999999999n //BigInt -- very large number -- used in heavy transactions of heavy traffic environment
const data5 = null // Standalone value
const data6 = undefined // undefined value -- value isn't assigned yet
const data7 = Symbol() // Symbol --  used for uniqueness for the code -- maoinly in React and  figma
const data8 = [{ num1: 21, num2: 'hello', num3: true }] // Object

console.table([data1,data2,data3,data4,data5,data6,data7,data8])
console.table([typeof data1,typeof data2,typeof data3,typeof data4,typeof data5,typeof data6,typeof data7,typeof data8])


console.log(typeof data5);
//here null -- type is object --