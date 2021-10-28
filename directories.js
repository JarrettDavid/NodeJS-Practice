/** In this script file or module you will see how to rename, move and delete
 * directories*/
const fs = require("fs");
const util = require("util");

/*We are calling the blocking version of rename. To change the directory
 storage-files to storage*/
fs.renameSync("./storage", "./storage-files");
fs.renameSync("./storage-files1", "./storage");

/*using the blocking version of the read directory function, this will ensure
 that the execution order of the functions. This function returns an array of
 string file names. The async version of this function requires a callback 
 function fo where the variables are to be stored.
 
 forEach is used to loop through each element in the array.

 unlinkSync is the blocking version of if the unlinking function. This 
 function is used to remove files from the selected directory. */
fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
    util.log(`${fileName} has been removed!`);
});

/*We are using the async version of remove directory. This takes a
 * directory name and callback function. Note, if the directory
 * contains files you will not be able to remove it until those files
 * have been moved or removed.*/
fs.rmdir("./storage", err => {
    if (err)
        throw err
    util.log("You have removed the following directoy: ./storage");
});