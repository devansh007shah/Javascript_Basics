// Uptill now we did was that all the codes written, were executed. But now based on certain conditions we can alter the state of execution

//IF - Condition
//Code is executed
if(true){

}

//Code is not executed
if(false){

}

// ASSIGNMENT oeprators

// < , > ,<= , >= , 
// = ( VAlues is equalled)
// == (values are equated and datatypes are compromised)
// === (values, datatypes are checked and equated)
// != (vlaues are not equal)
// !== (vlaues and datatype are not equal) 

if(2 == '2'){
    console.log('executed');// matches data irrespective of the datatypes
}
if(2 === '2'){
    console.log('executed');// -- strict equal -- matches data and respective of the datatypes
}

if(2!=3){console.log('execute');}

// IF-ELSE Statement

const temperature = 31

if(temperature > 50){
    console.log('Temperature is acceptable');
} 
else{
    console.log('temperature is unaccetab;le')
}

// IF-Condtion- example

// const score = 132
// if(score>100){
//     const power = 'flu'
//     console.log(`Patient has the ${power}`);
// }
// console.log(`Patient has the ${power}`); // error - out of the scope 


// Implicit Scope -- one line scope

// const balance = 100

// if(balance>50) console.log(`Passed`); // Not Preferrable


//--------NESTING -- IF -ELSE -IF Statement

// const balance  = 1000

// if(balance < 500){
//     console.log('More than 500');
// }
// else if(balance < 750){
//     console.log('More than 750');
// }
// else if(balance < 900){
//     console.log('More than 900');
// }
// else{
//     console.log('More than 901');
// }

const userLogged = true
const accountBalance = 2000
let codAvalablity = 'Ahmedabad'
const googleLogin = false
const emailLogin = true

if(userLogged && accountBalance >=1500 && codAvalablity == 'Surat'){
    console.log('Product can be bought');
}

else{
    console.log(`Product can't be bought`);
}

if(googleLogin || emailLogin){
    console.log('Login is okay');
}