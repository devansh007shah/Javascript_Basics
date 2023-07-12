const data1 = 21 //Number -- upto 2^53 is the memory package size allowed in number

//For string to a number 
const data2 = '21' //String 

console.log("data2",Number(data2),typeof Number(data2));

const data2a = '21abc' 

console.log("data2a",Number(data2a),typeof Number(data2a)); // Value is NaN -- Not a number


//For Boolean to Number
const data3 = true // Boolean 
console.log("data3 :",Number(data3),typeof Number(data3)) //Boolean converts to 0 or 1

const data4 = 9999999999999999n //BigInt -- very large number -- used in heavy transactions of heavy traffic environment

//From null to Number
const data5 = null // Standalone value

console.log("data5 : ",Number(data5), typeof Number(data5));// Value of null coverts to 0 

//From undefined to number

const data6 = undefined // undefined value -- value isn't assigned yet

console.log("data6 :",Number(data6),typeof Number(data6)); // Converts to NaN -- Not a number

// ---------------------------

//From Number to Boolean

const val1 = 1

const valToBoolean1 = Boolean(val1)
console.log(valToBoolean1)

const val2 = 0

const valToBoolean2 = Boolean(val2)
console.log(valToBoolean2)

const val3 =''
const valToBoolean3 = Boolean(val3)
console.log(valToBoolean3)

const val4 ='Dev'
const valToBoolean4 = Boolean(val4)
console.log(valToBoolean4)

// Boolean -- 1=> false , 0=> true , '' => false, 'Dev' => true

// ----------------------------

const val5 = 23
const valConv = String(val5)
console.log(valConv,typeof valConv);