/**In this script file or module is used to show how to spawn processes
 * that will run asynchronously*/

const cp = require("child_process");
const util = require("util");
const timestamp = require("./lib/TimeStamp");

/*Here we are calling the spawn function which takes in a command, in
 * this case we are calling node, followed by an array of the call
 * for the command, in this case we are running the module questions-
 * redone-again.js
 */
const questionApp = cp.spawn("node", ["questions-redone-again.js"]);

/*Without these three lines, 16-18 line 20-22 would just wait for
 input. These three lines are passed to the questions-redone-again.js
 module which it uses to move to the next question*/
questionApp.stdin.write(`${timestamp} Jarrett \n`);
questionApp.stdin.write(`${timestamp} College Station \n`);
questionApp.stdin.write(`${timestamp} To Learn and grow \n`);

/*Here we output the final result from the questions-redone-again.js
 module*/
questionApp.stdout.on("data", data => {
    util.log(`from the questions redone again app: ${data}`);
});

/*Here we execute an annymous callback function once the process
 * has closed*/
questionApp.on("close", () => {
    util.log("Questions Application Exited!");
});