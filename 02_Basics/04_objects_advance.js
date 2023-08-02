// const tinderUser = new Object() --- singleton Object
const tinderUser = {} //Non-singleton-Object

console.log(tinderUser);

tinderUser.id = '121'
tinderUser.name = 'Dev'
tinderUser.isLoggedIn  = false

console.log(tinderUser);

const regCustomer = {
    fullName : {
        userFullName : {
            firstName : 'Devansh',
            middleName : 'Bhadresh',
            lastName : 'Shah'
        }
    },
    customerId :121,
    DOB : '12/12/2000',
    emailId : 'dev@gmail.com',
}

console.log(regCustomer.fullName.userFullName.firstName);

//Add objects

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}
console.log(Object.assign({},obj1,obj2)); // using object.assign({},..,..,..) -- all objects are concatenated


const obj3 = {5:'a',6:'b'}
const obj4 = {...obj1,...obj2,...obj3} // also USing spread function we can concatenate
console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

//Destructuring of Objects

const {id,isLoggedIn} = tinderUser
console.log(isLoggedIn,id);

// APIs Uunderstanding

//API Fromat
[
    {},{},{}
] 

//RandomusernameAPI && JSON formatter (to view API in correct form)

// JSON Format 

// {
//     'name':'Devansh',
//     'id':131,
//     'movie':'Jurassic'
// }

//URL -- https://randomuser.me/api/ >> into JSON FORMATTER

// 1 Object having to values
//  1A - Result is an array - 1 value
//      1A(A) - 0 is an Object - 12 values
//          1A(A(A)) -- key : value
//          1A(A(B)) -- object -- 3 {key:value} pairs

//  1B - Info is an object - 4 values
//      1B(A) -- key : value
//      1B(B) -- key : value
//      1B(C) -- key : value
//      1B(D) -- key : value
