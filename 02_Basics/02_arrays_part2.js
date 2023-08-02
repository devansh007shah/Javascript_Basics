// Arrays - advanced method

const marvel_heroes = ['Ironman','Thor','Hulk']
const dc_heroes = ['Batman','Superman','Flash']

// dc_heroes.push(marvel_heroes)
// console.log(dc_heroes); //pushes array into array

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

//SPREAD OPERATOR

const allHeroes = [...marvel_heroes, ...dc_heroes] // spreads all the string values of the arrays individually
console.log(allHeroes);

const diff_heroes = [...marvel_heroes].concat('65')
console.log(diff_heroes,typeof(diff_heroes));

// FLAT method

dc_heroes.push(marvel_heroes)
console.log(dc_heroes); //pushes array into array
console.log(dc_heroes.flat(Infinity)); //removes all the arrays inside the varible value and converts unto one box of an array object

console.log(Array.from('Devansh')); // seperates individually evry string of the value
console.log(Array.isArray('dev')); // checks whether it is an array or not
console.log(Array.from({name:'Devasnh'})); // returns empty array because keys not mentioned
console.log(Array.from({name:'Devasnh'}.name)); // returns array because keys mentioned

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // combines the variables and forms an array

