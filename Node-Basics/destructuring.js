// object destructuring

const person = {    // give default values and try different name
    name: "Mayank",
    email: "mayanksoni2020@gmail.com",
    age: 22,
    address: {
        city: "Jhansi",
        pincode: 284306,
        state: "UP",
        country: "IN"
    },
};

// const city = person.address.city;
// console.log(city);

// const { name, age, address } = person;    // declaration
// console.log(name, age, address.city, address.pincode);

// function destructuring

// function getAddress() {
//     const { city } = person.address;
//     console.log(city);
// }
// getAddress();

// const getAddress = ({ city }) => { console.log(city); };
// getAddress(person.address);

// const { city: cityName, pincode, state, country = "India" } = person.address;
// console.log(pincode, cityName, state, country);

// reassign
// let a = 10;
// let b = 30;
// const obj = {   // reassigned the variables within object
//     a: 40,
//     b: 22
// };

// ({ a, b } = obj);   // destructuring
// console.log(a, b);


// array destructuring

// const hobbies = ['Sports', 'Sketch', 'Music', 'Swimming', 'Painting'];
// const [, , h3, h4, h5] = hobbies;
// console.log(h4, h5, h3);

// TODO 1: Create a posts arrays, which stores posts, fetch first two post in variables and the rest of the posts needs to be stored in separate array
const posts = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'];
const [p1, p2, ...p3] = posts;  // using rest operator ...p3
console.log(p1, p2, p3);