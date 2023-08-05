// IIFE - Immediately Invocked Function Expression

// Mainly used to decrease the pollution of many random variables in global scope

function fire(){
    console.log('DB Connected');
}
fire(); // normal way to call a function

(function wildFire(){
    console.log('DB Connected');
})(); // semicolon needed for iife to work smoothly

// ()=>()

((name)=>{
    console.log(`This is a nice name : ${name}`);
})('Devansh') // Conside it as a function but with more conjested form of function