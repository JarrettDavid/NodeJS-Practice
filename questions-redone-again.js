const collectAnswers = require("./lib/quesstions-module-redone");

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
//Sending all answers to the emitter variable
const answersEvents = collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});

//Calls the new event emitter and outputs the answers as they are input by the user
answersEvents.on("answer", answer =>
    console.log(`question answered: ${answer}`)
);

//Calls the event emitter once the event has been completed, this outputs all of the answers
//to the console
answersEvents.on("complete", answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
});
//Since you can call a number of events this is a second complete event that is called
//which exits the process once the vent has been completed
answersEvents.on("complete", () => process.exit());