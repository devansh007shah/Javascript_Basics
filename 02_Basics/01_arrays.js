// arrays
const arr1 = [12,32,13,44,22]
const arr2 = ['dev',true,212,[12,32,arr1]]

console.log(arr2[3][2][3]);//Arrays can store multiple types of data in their database


//array method

arr2.push('push1')
console.log(arr2) // adds a value in the last index


arr2.pop()
console.log(arr2) // removes a value in the last index

arr2.unshift(12)
console.log(arr2) // adds the value at the start of the array

arr2.shift()
console.log(arr2) // removes the first index value of the array

console.log(arr2.includes(8));

const arr3 = arr2.join()
console.log(arr3);

// slice and splice
const arr4 = arr2.slice(1,5)
console.log(arr4);
console.log('arr2',arr2) // values remain the same after slice function

const arr5 = arr2.splice(1,5)
console.log(arr5)

console.log('arr2 now :',arr2) // values changes in splice after splice function