// GLOBAL & LOCAL Scope
let a = 200

//All local / block Scopes lie within the {}

if (true) {
    let a = 12
    const b = 13
    var c = 14

    console.log('Inner : ', a);
}

console.log(a); // won't take value of 'let' keyword
// console.log(b); // won't take value of 'const' keyword
//console.log(c); //*****big issue --- accepts value of 'var' keyword -- hence use of 'var' is avoided */

//------- nested scopes -----

function one() {
    const media = 'Times'
    function two() {
        const type = 'NewsPaper'
        console.log(media);
    }
    two()
    // console.log(type);
}
one()

// ----- interesting ----


console.log(
    addOne(3)
); // function doens't have an issue with calling a function anywhere in the script
function addOne(num1) {
    return num1 + 1
}



console.log(
    addTwo(3)
); //Since addTwo() is an expression - declaration is indiffrent from calling a function
const addTwo = function (num1) {
    return num1 + 2
}
