/**
 * This module or script file is used to create a new directory using the
 * fs module
 * */
const fs = require("fs");
const util = require("util");

/*variable names*/
let dirName = "storage-files";
let count = 0;

/*
 This conditional statement existSync is used to check to see if the
 directory name exists. If it does then we add a 1 to the end of it
 in order to create a new directory

 In either condition it will create a directory using the mkdir
 function. The current function is the blocking version meaning the
 main thread will not be released until the process has been completed.
 Both versions of the function takes in the directory name and a 
 callback function.
 */
if (fs.existsSync(dirName)) {
    count += 1;
    util.log(`The ${dirName} already exists! Updating directory name.`);
    dirName = dirName + count;


    fs.mkdir(dirName, err => {
        if (err)
            throw err;
        util.log(`Directory ${dirName} has been created!`);
    });
}
else {
    fs.mkdir(dirName, err => {
        if (err)
            throw err;
        util.log(`Directory ${dirName} has been created!`);
    });
}