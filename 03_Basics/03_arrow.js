// Arrow Function && Context

const user= {
    username : 'devansh',
    title : 'software Engineer',
    
    welcomeUser : function(){
        console.log(`Hello ${this.username}, welcome to the portal. I understand that you are applying for ${this.title} in our Company`)

        console.log(this);
    },
    
    
}

user.welcomeUser()
console.log(this); // desginates what variables are available for usage in that scope

function chai(){
    password = 'Deva'
    console.log(this.password);
}

chai() //lots of values are shown for usage

// const diffVal = function(){
//     let remady = 'Screpta'
//     console.log(this.remady);
// }
// diffVal() //undefined

const diffVal = () => {
    let remady = 'Screpta'
    console.log(this.remady);
}
diffVal() //undefined

//Arrow function -- implicit return

const addVal = (num1,num2) => (num1 + num2) // one liner function - are implicit functions .. statements within () in arrow function don't need return keyword

// ARROW Function-- () -- don't require return keyword && {} require return keyword

const newVal = (num1,num2)=> {username:'Ceva'}
console.log(newVal(12,32)); //undefined

const newVal1 = (num1,num2)=> ({username:'Ceva'}) // To get return value use -- ()
console.log(newVal1(12,32));


// In arrays 
const myArray = [1,3,23,42,45]
// myArray.forEach(()=>()) use of arrow function is very high in react
