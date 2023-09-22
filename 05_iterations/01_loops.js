// for loops 
// MAIN - SYNTAX 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// } // values print till 0,1,..9

// console.log(element); // Wont work because it is outside the scope


// ------------------

//Loop within a Loop

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (j===1) {
//             console.log('-------------');
//         }
//         const element = i*j
//         console.log(`value of 'i' is ${i} & 'j' is ${j} and their product is ${element}`);
//     }    
// }

// -------------------------

const heroes = [
    {
      name: "Superman",
      alterEgo: "Clark Kent",
      powers: ["Super strength", "Flight", "Heat vision"],
      universe: "DC Comics"
    },
    {
      name: "Batman",
      alterEgo: "Bruce Wayne",
      powers: ["Genius intellect", "Martial arts", "Utility belt"],
      universe: "DC Comics"
    },
    {
      name: "Wonder Woman",
      alterEgo: "Diana Prince",
      powers: ["Superhuman strength", "Lasso of Truth", "Flight"],
      universe: "DC Comics"
    },
    {
        name: "Spider-Man",
        alterEgo: "Peter Parker",
        powers: ["Wall-crawling", "Web-shooting", "Super agility"],
        universe: "Marvel Comics"
      },
      {
        name: "Iron Man",
        alterEgo: "Tony Stark",
        powers: ["Powered armor suit", "Genius inventor", "Flight"],
        universe: "Marvel Comics"
      },
      {
        name: "Thor",
        alterEgo: "Thor Odinson",
        powers: ["Mjolnir (hammer)", "Control over lightning", "Superhuman strength"],
        universe: "Marvel Comics"
      }
    
  ];
  
  
  const keysSet = new Set();
  
  heroes.forEach(obj => {
    Object.keys(obj).forEach(key => {
      keysSet.add(key);
    });
  });
  
  const keysArray = Array.from(keysSet);
  
  console.log(keysArray);
  
  for (let i = 0; i < heroes.length; i++) {
    const element = heroes[i].universe
    if(element === 'DC Comics'){
        const heroName = heroes[i].name
        console.log(`The ${element} hero is ${heroName}`);
    }
    else if(element === 'Marvel Comics'){
        const heroName = heroes[i].name
        console.log(`The ${element} hero is ${heroName}`);
    }
    else{
        console.log(`Not a hero of DC or Marvel Comics`);
    }
  }