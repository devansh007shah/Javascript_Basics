// forIn and forEach loops

// Most Common Use case in Javascript to work on Arrays is
// ['','',''] // Array has strings in it
// [{},{},{}] // Arrays have objects in it

// This will be used mostly

//forof -- Mainly used for Objects

arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i); //Prints values without specifying length or iterations
}

const marvelHeroes = [
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
    },
    
  ];
  

  for (const i of marvelHeroes) {
    console.table([i.alterEgo,i.universe]);
  }

const myArray = 'Hello Devansh'
for (const i of myArray) {
    if (i === ' ') {
        continue; // This will skip the iteration when i equals 3.
      }
    console.log(`Combine all charecters : ${i}`)

}

// ---------------------------------

// MAPs -- Mainly used for unique key-value pairs -- basically are objects

const map = new Map()
map.set('In','India')
map.set('En','England')
map.set('USA','United States of America')
map.set('En','England') // Values Duplicated won't hold it in map - hence not printed

console.log(map);

// Maps used in forof Loops -- since it is all strings

for (const [x,y] of map) {
    console.log(x,' :- ',y);
}

//use froOf Loops -- used in Objects -- won't work like it worked with Arrays

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'CS:GO',
//     'gaem3' : 'FarCry'
// }
// for (const [key,value] of myObject) {
//     console.log(`${key} : ${value}`);
// }

