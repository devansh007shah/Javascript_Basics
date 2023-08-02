// FUNCTIONS

//Syntax -- function(keyword); sayMyName(refrence); sayMyName()- exection of the function
function sayMyName(){
    console.log('D');
    console.log('E');
    console.log('V');
    console.log('A');
}

console.log(sayMyName); // Because Refrence name doesn't do anything
sayMyName() // refrence() --execution happens because '()'


// addTwoNum(parameter1,parameter2)
function addTwoNum(num1,num2){
    console.log(num1+num2);
}

addTwoNum(12,13); //25
addTwoNum(12,'13'); //1213
addTwoNum(12,'a'); //12a
addTwoNum(12,null); //12

//Verification of the parameter is must

const resulVal = addTwoNum(21,21)
console.log(resulVal); //undefined -- no return value is published

//Use of RETURN keyword

function addition(num1,num2){
    console.log('Devansh');// prints 'Devansh' -- before 'return' keyword
    return num1 + num2
    console.log('DEvasnh'); // won't print because after RETURN vlaue no execution happen in a function
}
const resulVal1 = addition(12,23)
console.log(resulVal1); // 35 -- return value used

// PARAMETERS 

function statemnet1(username){
    return`${username} is Logged in`
}

console.log(statemnet1());// if parameter is not mentioned undefined is logged in


// IF_ELSE statement introduction
function userName(user1){
    if(user1 === undefined){
        console.log(`Please enter your username`)
        return ''
    }
    return `${user1} is Logged in`
}

console.log(userName('Dev'));//Dev is Logged in
console.log(userName());//Please enter your username

// function if(!user1){...} is equivalent to if(user1 === undefined)

function userNameVal(user1){
    if(!user1){
        console.log(`Please enter your username`);
        return ''
    }
    return `${user1} is Logged in`
}

console.log(userName('Devansh'));//Dev is Logged in
console.log(userName());//Please enter your username