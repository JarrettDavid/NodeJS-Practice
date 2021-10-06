// JavaScript source code
//Creating a questions module
const readline = require("readline");

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

    const questionAnswered = answer => {
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        }
        else {
            done(answers);
        }
    }
    rl.question(firstQuestion, questionAnswered);
};