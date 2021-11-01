/** In this script file or module we will be using hte child 
 * process module.
 * This can be used to open files and applications
 * 
 * */
const cp = require("child_process");
const util = require("util");
const timestamp = require("./lib/TimeStamp");

/*The exec is used for synchronous commands, they run once.
 * and spit out some data. Here we are opening the URL 
 * followed by a PowerShell terminal.
 * cp.exec("start https://www.linkedin.com/learning");
 * cp.exec("start powershell");
 *
 * Here we are using the ls command. We are using 
 * three parameter:
 * err - used to print out the error caught by
 *       Node.js.
 * data - used to capture the data from the 
 *       command being called.
 * stderr - used to print out the error from the
 *       terminal. 
cp.exec("ls", (err, data, stderr) => {
    if (err)
        throw err;
    util.log(`The data: ${data}`);
    util.log(`The error: ${stderr}`);
});

cp.exec("lst", (err, data, stderr) => {
    util.log(`The data: ${data}`);
    util.log(`The error: ${stderr}`); //prints the error from the terminal
});

* here we are executing another node module, this one is called
 * readStream. The data being printed is the results of that
 * module being run in the terminal
cp.exec("node readStream", (err, data, stderr) => {
    if (err)
        throw err;
    console.log(`${timestamp} The data: ${data}`);
    console.log(`${timestamp} The error: ${stderr}`);
});
*/