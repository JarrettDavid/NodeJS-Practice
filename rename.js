const fs = require("fs");
const util = require("util");

/*The rename function has a blocking and async call. It also allows for
 * a Callback function to be used. You can use this function to do the
 * collowing:
 * Rename a file. In this case, change colors to colorData*/
fs.renameSync("./assets/colors.json", "./assets/colorData.json", err => {
    if (err)
        throw err;
    util.log("The file rename has been completed!");
});

/*Move a file. In this case we are moving notes.md from assets to 
 * storage-files */
fs.renameSync("./assets/notes.md", "./storage-files/notes.md", err => {
    if (err)
        throw err;
    util.log("The file move has been completed!");
});

/*Here we are setting a time out function that will call another function
 called unlink which will remove a file from a location. This function has
 a blocking an async version.*/
setTimeout(() => {
    fs.unlinkSync("./assets/alex.jpg");
}, 4000);