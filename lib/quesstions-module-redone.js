// JavaScript source code
//Creating a questions module
const readline = require("readline");
const { EventEmitter } = require("events"); //destructering the array to only get the function needed EventEmitter

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 *exporting this Collect answers 
 */
//If you want to make done optional you can do the following:
// change done to done = f => f
// This sets done to a dummy function that returns nothing,
//however, the process will still be running

module.exports = (questions, done = f => f) => {
    const answers = [];
    const [firstQuestion] = questions;
    const emitter = new EventEmitter(); //declaring a new event emitter
    const questionAnswered = answer => {
        emitter.emit("answer", answer); //the event emitter is being called, taking in each answer as they come in
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        }
        else {
            emitter.emit("complete", answers); //this emits a list of answers after the process has completed
            done(answers);
        }
    }
    rl.question(firstQuestion, questionAnswered);

    return emitter; //this returns each answer as they get input
};