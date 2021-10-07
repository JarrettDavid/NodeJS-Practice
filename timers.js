// JavaScript source code

//const prevents users from changing the variable value
const waitTime = 5000;
const waitInterval = 500;

//allows the user to change the variable value
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;//increments the current time
    const p = Math.floor((currentTime / waitTime) * 100); //used for calculating the interval percentage, can use to simulate process load time
    process.stdout.clearLine(); //Used to clear the output line from the terminal
    process.stdout.cursorTo(0); //used to set the terminal position, in this case we set it to position 0
    process.stdout.write(`waiting... ${p}%`);
    /*console.log(`waiting ${currentTime / 1000} seconds`);*/
};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done")
};

const interval = setInterval(incTime, waitInterval); //setting the interval to a variable allows you to invoke the clearInterval() function
setTimeout(timerFinished, waitTime); //invokes the timerFinshed function when the wait time has been reached.