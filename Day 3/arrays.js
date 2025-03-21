//Arrays functions
//1. Slice Method:- does not change the arrays
console.log('\n -Slice Function-')
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Slice 1: ',arr.slice(2));

console.log('Slice 2: ',arr.slice(2, 4));

//2. Splice Method:- Changes an original array
console.log('\n -Splice Function-')
const newArr = arr.splice(3,4,['a','b','c','d']);
console.log('New Array: ',newArr);
console.log('Original Array: ',arr);

//3. Map functions:-  this function is used to transform arrays
//it takes callback functions as a parameter
console.log('\n -Map Function-')
let arrays = [1, 2, 3, 4, 5];
const doubledNumbers = arrays.map((num) => num * 2);
console.log(doubledNumbers);
console.log(arrays);

//4.filter:- this function is used to filter out elements from array based on condition
console.log('\n -Filter Function-')
arrays = [1, 2, 3, 4, 5, 8, 10, 12, 16, 17];
const evenNumbers = arrays.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//5.Spred method:- 
console.log('\n -Spred Method-')
const arr1 = [10, 20, 30];
const arr2 = [...arr1, 40,50];
console.log(arr2);

//rest parameter
console.log('\n -rest Parameter-')
function sum(...numbers) {
    return numbers;
}

console.log(sum(1,22,333,4444)); // Output: 100


