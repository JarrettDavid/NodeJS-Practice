/*
 * used for calling the fs or File System module built into NodeJS
 */
const fs = require("fs");

/*
 * This line calls the the read function1 synchronous meaning that
 * it is blocking. Because of this nothing will occur until the
 * function has finished its process. The results are output as
 * an array.
 *
 *const files = fs.readdirSync("./assets");
 */

/*
 * This line calls the read function asynchronously.
 * This function does not block. It will return output when it has
 * finished processing. The files will be passed to the callback 
 * function. The variables for the function are error (err) and
 * the files array. Anything after this will be preformed before
 * this function has completed its run.
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

fs.readdir("./assets", (err, files) => {

    if (err)
        throw err; //this will stop the processing of the module

    /**
     * This function is an asynchronous function that is designed
     * to print out the values in the files array on their own line
     * The function calls the waitFor function that pauses 50 ms 
     * before running the next line
     * */
    //async function that enables asynch and prmmise behavior
    const start = async () => {
        files.forEach(async (file) => {
            await waitFor(50); //this operator waits for the promis to return
            console.log(file)
        });
    }
    start();
    /*these two lines, 44 and 45 are executed before the start function
     even though they appear after it. This is because we are waiting 
     to execute the start function after it has completed*/
    console.log("completed file read");
    console.log(files);
});
console.log("started reading files");