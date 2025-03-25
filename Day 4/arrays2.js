// Split Function:-
console.log('\n -Split Function-')
const str = 'Hello World'
console.log(str.split(''));
console.log(str.split('o'));

// Join Function:-
console.log('\n -Join Function-')
const arr = [1, 2, 3, 4, 5]
console.log(arr.join());
console.log(arr.join(''));
console.log(arr.join('x'));

// Reverse Function
console.log(arr.reverse());
const str2 = "Full stack developer with genAI";
const reversed = str2.trim().split(" ").reverse().join(" ");
console.log(reversed);

// Array Structuring:-
console.log('\n -Array Structuring-');
const [c, d] = [10, 20];
console.log('\nExample 1:',c);

const [x] = [10, 20];
console.log('\nExample 2:',x);

const hello=()=>{
    console.log('Hi');
}
const [a, b] = [10, hello]
console.log('\nExample 3:',b);

// Array Destructuring:-
console.log('\n -Array Destructuring-');
const {firstName,lastName} = { firstName: 'Hello', lastName: 'World'}; 
console.log(firstName);
