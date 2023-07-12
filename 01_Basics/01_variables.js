const accountId = 2121 ;
let accountEmail = 'dev@deec.com';
var accountPassword = '12122';

accountCity = "A'bad"; // Use of variables without keywords must be avoided
let accountState; // Use is permitted, but the value of the variable is undefined

// accountId = 133; // Doesn't change its value
// console.log(accountId);

accountEmail ='hc@hjc.com';
accountPassword = '2121';
accountCity = 'Mumbai';

/*
    'var' keyword must be avoided at any cost as it creates issues in the block scope functions 
    i.e: {} inside curly braces -- 'var' keyword creates issues
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])