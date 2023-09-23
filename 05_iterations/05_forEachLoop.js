// forEach Loops

const generalItems = [
    "book",
    "pen",
    "notebook",
    "phone",
    "wallet",
    "keys",
    "umbrella",
    "sunglasses",
    "water bottle",
    "backpack",
    "watch",
    "shoes",
    "hat",
    "jacket",
    "toothbrush",
    "toothpaste",
    "socks",
    "charger",
    "laptop",
    "earphones"
  ];
  
//   generalItems.forEach(function (items) {
//     console.log(items);
//   }) // Normal function

//Arrow Function
  generalItems.forEach((items)=>{
    console.log(items);
  })


//Standard Way of defining a function and than using in forEach method  
function printVal(values){
    console.log(values);
}

generalItems.forEach(printVal)

// Also diffrent parameters that can be accessed in forEach loops
// generalItems.forEach((data,index,array)=>{
//     console.log(data,index,array);
// })

// Array that has Objects [ {},{},{} ]

const courses = [
    {
      name: "Mathematics",
      code: "MATH101",
      instructor: "Professor Smith",
      credits: 3
    },
    {
      name: "Computer Science",
      code: "COMP200",
      instructor: "Professor Johnson",
      credits: 4
    },
    {
      name: "History",
      code: "HIST150",
      instructor: "Professor Davis",
      credits: 3
    },
    {
      name: "English Literature",
      code: "ENGL220",
      instructor: "Professor Wilson",
      credits: 3
    },
    {
        name: "English Literature",
        code: "ENGL220",
        instructor: "Professor Wilson",
        credits: 3
      }
  ];
  
  const subjectCode = []
  const maps = new Map()
  courses.forEach((items)=>{
    console.log(items.code);
    subjectCode.push(items.code)
    maps.set(items.name,items.code)
  })
  
  console.log(subjectCode);
  console.log(maps);