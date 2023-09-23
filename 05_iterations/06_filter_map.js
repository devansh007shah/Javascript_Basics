// Filter method

const myArray = [1,2,3,4,5,6,7,8,9,10]

//filter method
const myNewArray = myArray.filter((nums)=>{
  return  nums > 5
})
console.log(myNewArray);

//simple if-else method

const myLargeArray = []

myArray.forEach((nums)=>{
    if (nums>5) {
        myLargeArray.push(nums)
    }
})
console.log(myLargeArray);

// Example

const books = [
    {
      title: "To Kill a Mockingbird",
      genre: "Classic",
      publishingDate: "1960"
    },
    {
      title: "1984",
      genre: "Dystopian",
      publishingDate: "1949"
    },
    {
      title: "Pride and Prejudice",
      genre: "Romance",
      publishingDate: "1813"
    },
    {
      title: "The Great Gatsby",
      genre: "Fiction",
      publishingDate: "1925"
    },
    {
      title: "The Catcher in the Rye",
      genre: "Coming-of-Age",
      publishingDate: "1951"
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      publishingDate: "1997"
    },
    {
      title: "Brave New World",
      genre: "Dystopian",
      publishingDate: "1932"
    },
    {
      title: "The Hobbit",
      genre: "Fantasy",
      publishingDate: "1937"
    },
    {
      title: "The Lord of the Rings",
      genre: "Fantasy",
      publishingDate: "1954"
    },
    {
      title: "The Da Vinci Code",
      genre: "Mystery",
      publishingDate: "2003"
    }
  ];
  
const fantasyBooks = books.filter((fantacy_book)=>{

    let pubDate = Number(fantacy_book.publishingDate)
   return fantacy_book.genre === 'Fantasy' && pubDate <= 1960
})

console.log(fantasyBooks);


// Chaining methods

//Map will return value no matter what
//Filter has true/false game

const myArray1 = [1,2,3,4,5,6,7,8,9,10]
const newArray = myArray1.map((num)=>(num+10)).map((num)=>num*10).filter((num)=>(num>170))

console.log(newArray);