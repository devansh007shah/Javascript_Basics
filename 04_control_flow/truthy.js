//Truthy Values -- uptill now conditional statemnts had a firm true or false values to move forward
//But now slight new way of passing through conditional statement

const userName = 'deva122'

if(userName){console.log('Got the userName')}
else{console.log('No Username');}

// Empty String -- vlaue considered as false
const userName1 = ''

if(userName1){console.log('Got the userName')}
else{console.log('No Username');}

//Empty array - value considered to be true
const myArray = []

if(myArray){console.log('Got the userName')}
else{console.log('No Username');}

//Falsy Values -- -0, 0 , BinInt 0n, '',null, undefined, NaN

//Truthy Values -- '0','false',' ',[], {}, function(){}

//Advance example

const myArray1 = {}
if(Object.keys(myArray1).length === 0){
    console.log(`Empty array is ${myArray1}`);
}