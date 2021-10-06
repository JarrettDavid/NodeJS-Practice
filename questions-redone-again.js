const collectAnswers = require("./lib/quesstions-module");

//an array of questions that will be used for asking questions
const questions = [
    "1. What is your name? ",
    "2. Where do you live? ",
    "3. What are you going to do with node js? "
];

//this function is designed to collect user input from the terminal
//This is a callback function for processing those answers in the
//array. This will work with or without the handler function 
//collectAnswers(questions);// This will just hang unless you hit Command + C or ctrl + C

//contains a handler function to process the input and exit the process
collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});