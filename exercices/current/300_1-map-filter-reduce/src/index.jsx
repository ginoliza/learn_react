
var numbers = [3, 56, 2, 48, 5];
//MAP -Create a new array by doing something with each item in an array.

// function double(num){
//   return num*2;
// }

// console.log(numbers.map(function(num){
//   return num*2;
// }));

//FILTER - Create a new array by keeping the items that return true.
// console.log(
//   numbers.filter(function (num) {
//     return num > 10;
//   })
// );

//REDUCE - Accumulate a value by doing something to each item in an array.
// console.log(numbers.reduce(function (total, num) {
//   return total-num;
// }));


//FIND - find the first item that matches from an array.
// console.log(numbers.find(function(num){
//   return num == 3;
// }));


//FINDINDEX - find the index of the first item that matches.
// console.log(numbers.findIndex(function(num){
//   return num == 48;
// }));


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

// Exercise: cut the 'meaning' of emojipedia to a 100 characters
import emojipedia from "./emojipedia";

const cutMeaning = emojipedia.map(function foo(element) {
  return element.meaning.substring(0,100);  
})

console.log(cutMeaning);