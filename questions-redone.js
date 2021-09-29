// JavaScript source code
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const questions = [
    "1. What is your name? ",
    "2. Where do you live? ",
    "3. What are you going to do with node js? "
];

//With coding challenges it is always good to break the objectives down
//into functions . You mak not know how to do things just yet. Create
//Functions for each of the prcedures that need to be completed

//This function collects all of the answers for each question in an array
//done is the callback that gets invoked which calls the callback function
//below
const collectAnswers = (questions, done) => {
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

//this function is designed to collect user input from the terminal
//This is a callback function for processing those answers in the
//array
collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});