// Events Listeners <Custom>

// data, end, finish, close

const events = require("events");
const eventEmitter = new events.EventEmitter();

eventEmitter.on("greet", () => {
    console.log("Welcome to the Class!");
});
eventEmitter.on("greet", () => {
    console.log("Welcome to the College!");
});

eventEmitter.once("message", () => {
    console.log("Lets learn Node JS...");
});

eventEmitter.addListener("course", () => {
    console.log("Course of KM013");
});

// Maximum 10 listeners we can make using one  event
// If we have to increase from 10 then use setMax listener
eventEmitter.emit("greet");
eventEmitter.emit("message");
eventEmitter.emit("course");
console.log(eventEmitter.eventNames());
// eventEmitter.removeAllListeners();
console.log(eventEmitter.listenerCount("greet"));



// ToDo :- Event based application that behaves as a claculator - "+, -, *, /" 'Very Important'...

// eventEmitter.on("add", (a, b) => {
//     console.log(a + b);
//     console.log("Inside add event");
// });

// eventEmitter.emit("add", 4, 5);
