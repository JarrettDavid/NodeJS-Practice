const fs = require("fs");
const util = require("util");

/*
* This is a synchronous file read that is taking place. Blocking is taking
 * place so no other actions will take place.
 * Since we are reading a text file we use UTF-8
 * util.log is used along with console log to get the timestamp for when the
 * output took place.
 * */
/*
const text = fs.readFileSync("./assets/Readme.md", "UTF-8");

util.log(text);
console.log(text);
*/

/**
 * 
 * Pause the system for a user specified amount of time. Promise
 * is an object used to represnt the completion of failure of an
 * asynchronous operation. Here we are using the Promise 
 * constructor and wrapping it around a function that expect a
 * success and/or failure to be returned in the old way. This way
 * you can still have the same functionality without calling them
 * directly.
 */
const waitFor = (ms) => new Promise(r => setTimeout(r, ms))

/*
* This is an asynchronous file read that is taking place. No blocking is taking
 * place. Just like readdir we need to add a callback function with variables 
 * for handling the error and one for handling the input read. All log functions
 * must be added to the callback function
 * Since we are reading a text file we use UTF-8
 * util.log is used along with console log to get the timestamp for when the
 * output took place.
 * 
fs.readFile("./assets/Readme.md", "UTF-8", (err, txt) => {
    if (err) {
        util.log(`An error has occurred: ${ err.message }`);
        process.exit();
    }
    util.log("file contents read");
    //util.log(txt);
    //async function that enables asynch and prmmise behavior
    const start = async () => {
        if (err) {
            util.log(`An error has occurred reading the lines in the file: `${ err.message });
            process.exit();
        }
        for (let indx = 0; indx <= txt.length - 1; indx++) {
            await waitFor(50);
            util.log(txt[indx]);
        }
    }
    start();
});
*/
/*In this example we are reading a binary file, in this case an image file
 We do not need encoding for binary files so the UTF-8 encoding has been
 removed*/
fs.readFile("./assets/alex.jpg", (err, img) => {
    if (err) {
        util.log(`An error has occurred reading the image: ${err.message}`);
        process.exit();
    }
    util.log("image contents read");
    //util.log(img);
    //async function that enables asynch and prmmise behavior
    const start = async () => {
        if (err) {
            util.log(`An error has occurred reading the lines in the image: ${ err.message }`);
            process.exit();
        }
        for (let indx = 0; indx <= img.length - 1; indx++) {
            await waitFor(50);
            util.log(img[indx]);
        }
    }
    start();
});