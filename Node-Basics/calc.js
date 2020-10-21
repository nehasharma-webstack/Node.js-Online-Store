const express = require("express");
const events = require("events");
const eventEmitter = new events.EventEmitter();

const router = express.Router();

router.get('/calculate', () => {
    eventEmitter.on("add", (a, b) => {
        console.log(a + b);
    });

    eventEmitter.emit("add", 4, 5);
});

module.exports = router;