// JavaScript source code
const readLine = require("readline"); //used for reading input in from the terminal


//used for setting up the interface for readline
//need to tell what stream to use for input and
//what stream to use for output
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

//used the question fuction available for the interface
//the first argument is the question we want to ask
//the second is a callback function for the when the 
//question has been answered
let quest = "How do you like Node? ";
rl.question(quest, answer => {
    console.log(`Your answer: ${answer}.`);
});