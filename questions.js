// JavaScript source code
//process.stdout; //this is a writable string process. to send data out of your program. allow used to communicate with a process that is running
//stdout.write(); give us control on how the output is formated in the terminal
//process.stdin; // this is used to take input from the terminal. Allow user to communicate with a process that is running
/*
process.stdout.write("Hello ");
process.stdout.write("World \n\n\n");
*/

// array of questions
const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?",
    "What is the speed of a swallow?"
];

//function for retrieving a question from array of questions
const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write( ` > `);
};

//calling the ask function. By default it will output the first question
ask();

//answers array, used for output
const answers = [];

//process for reading input from the user
//first parameter is a data event that retrieves all data from the users keyboard after they press enter
//second parameter is a function that is used to handle the event
process.stdin.on('data', data => {
   
        process.stdout.write(`\n\n ${data.toString().trim()} \n\n`); //data is taken in as binary. To convert to string use the toString() function
    /*     process.exit(); //used for exiting a process
    */

    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit(); //used for exiting a process
    }
});

process.on('exit', () => {
    const [name, activity, lang, swl] = answers; //array destructuring
    console.log(`
    Thank you for your answers.

    Go ${activity} ${name}, you can write ${lang} code later!!!

    The flight speed of a Swallow is ${swl}. THE MORE YOU KNOW

    `);
});