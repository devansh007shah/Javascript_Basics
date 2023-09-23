// reduce Method

// vvvvvvimp

const myArray = [1,2,3,4,5,6,7,8,9,10]

const myTotalVal = myArray.reduce(function(acc,currVal){
    console.log(`acc val : ${acc} & currVal : ${currVal}`);
    return acc + currVal
},0)
console.log(myTotalVal);

//Arrow Method
// One Line - reduce method --- Most efficient way is through practice
const totalVal = myArray.reduce((acc,curr)=>(acc+curr),0) 
console.log(totalVal);

// Example



const projects = [
    {
      name: "Website Redesign",
      price: 2500,
      estimatedCompletion: "2 weeks"
    },
    {
      name: "Mobile App Development",
      price: 8000,
      estimatedCompletion: "3 months"
    },
    {
      name: "E-commerce Platform",
      price: 5000,
      estimatedCompletion: "2 months"
    },
    {
      name: "Content Management System",
      price: 3500,
      estimatedCompletion: "6 weeks"
    },
    {
      name: "Digital Marketing Campaign",
      price: 1500,
      estimatedCompletion: "1 month"
    },
    {
      name: "Logo and Branding",
      price: 1000,
      estimatedCompletion: "2 weeks"
    },
    {
      name: "Database Migration",
      price: 3000,
      estimatedCompletion: "2 months"
    },
    {
      name: "Video Production",
      price: 4500,
      estimatedCompletion: "8 weeks"
    },
    {
      name: "AI Chatbot Integration",
      price: 6000,
      estimatedCompletion: "3 months"
    },
    {
      name: "SEO Optimization",
      price: 2000,
      estimatedCompletion: "1 month"
    }
  ];

//First Attempt -- Successfull

//   const initialCost = []
//   let retVal = 0
//   const projectCost = projects.filter((item)=>(retVal = initialCost.push(item.price)))
//   const newCost = initialCost.reduce((acc,curr)=>(acc+curr),0)
//   console.log(newCost);

// ----- REAL -LIFE --------

const totalCost = projects.reduce((acc,item)=>(acc+item.price),0)
console.log(totalCost);