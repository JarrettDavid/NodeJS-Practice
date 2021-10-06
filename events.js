// JavaScript source code
//events is an events module that comes standard with NodeJS
//it allows you to access and set various events 
const events = require("events");

//declaring a new event emitter. This is used for creating
//custom events
const emitter = new events.EventEmitter();

//Here we call the .on function. In this calse 
// it will output a message and who the message is 
//from on the screen.
emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

/* This was the original test where we call the customEvent function
 *  the other parameters are the message followed by who said the message
emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "That's pretty cool huh?", "Alex");
*/

//Here we have delcared an input process that outputs user input from
//the terminal. The process ends when the user types "exit"
process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit") {
        emitter.emit("customEvent", "Goodbye!", "process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
});