// +++++++++++++++++++++++++++ Memory type in Javascript

//Stack , Heap Memory --- Stack is used in Primitive Memory && Heap Memory is used in Non-primitrive memory

//Stack memory copies your code in its memory 
//Heap memory uses reference in your memory

let myName = 'Devansh shah'
let anotherName = myName
anotherName = 'Siddhi Shah'

console.log(myName);
console.log(anotherName);

let userOne = {
    email:'dev@gmail.com',
    add:'12,asbs Street,Cin'
}

let userTwo =  userOne

userTwo.add = "1, Anupam Soc, A'bad"

console.log(userOne);
console.log(userTwo);

// Because memory in Non-primitive datatype is stored in heap -- reference is given

