// forIn Loops -- Mainly used for Arrays

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "hiking", "coding"]
  };

for (const key in person) {
   
    console.log(`${key} of the member is ${person[key]}`);
}


// For Arrays

const myArray = ['java','C++','JS','Python']

for (const key in myArray) {
    console.log(myArray[key]);
}