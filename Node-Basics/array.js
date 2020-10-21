const hobbies = ['Sports', 'Sketch', 'Music'];
console.log(hobbies);

// hobbies.push('Social Media');
// console.log(hobbies);

// hobbies.unshift('Cooking'); //shift for deleting from beginning
// console.log(hobbies);

console.log(hobbies.indexOf('Sketch'));
// console.log(hobbies);

console.log(hobbies.findIndex('Sketch'));

// hobbies.splice(0, 2);
// console.log(hobbies);

// TODO 1: Add 3 more elements into the array and display elements from index from 2 to 4th index
// hobbies.push('Movies', 'Skating', 'Swimming');
// console.log(hobbies);
// const newHobbies = hobbies.slice(2, 5);
// console.log(newHobbies);
// const num = [1, 2, 3, 4, 5];
//hobbies.forEach(hobby => console.log(hobby));

// const newNum = num.map((n) => { return n * 10; });
// console.log(newNum);

// const newNum1 = num.filter((n) => n > 2);
// console.log(newNum1);

// TODO 2: Append every hobby by "My Hobby", use map
// const myHobby = hobbies.map((m) => "My hobby: " + m);
// console.log(myHobby);

// TODO: Hobbies Array, fetch the elements which is atleast 6 char long
// const newHobby = hobbies.filter((h) => h.length >= 6);
// console.log(newHobby);