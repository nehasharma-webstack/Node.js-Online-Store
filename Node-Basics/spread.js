// https://developer.mozilla.org/en-US/docs/Web/Javascript/Reference/Global_Objects/Array/map

// Spread Operator

const person = {
    name: "Mayank",
    age: 22,
    email: "mayanksoni2020@gmail.com"
};

const newPerson = {
    ...person, //immutability
    location: "India",
    getLocation() {
        console.log(this.location);
    },
};

console.log(newPerson);

// TODO 4: Hobbies- add more values in new array
const hobbies = ['Sports', 'Sketch', 'Music'];

const newHobbies = [
    ...hobbies,
    'Swimming',
    'Skating'
];
console.log(newHobbies);

// Rest Operator
const toArray = (...args) => { //variable arity
    return args;
};
console.log(toArray(1, 2, 3, 4, 5, 6, 7));