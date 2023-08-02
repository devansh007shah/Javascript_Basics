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