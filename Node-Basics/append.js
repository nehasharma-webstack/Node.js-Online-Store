// function multiply(array) {
//     var sum = 1;
//     for (var i = 0; i < array.length; i++) {
//         sum = sum * array[i];
//     }
//     return sum;
// }
// console.log(multiply([1, 2, 3]));

// Example Node.js program to append data to file
var fs = require('fs');

var data = "\nLearn Node.js with the help of well built Node.js Tutorial.";

// append data to file
fs.appendFileSync('test.txt', data, 'utf8');
console.log("Data is appended to file successfully.")