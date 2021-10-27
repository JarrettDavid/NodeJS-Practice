/**
 * In this example we are using the fs module to write files to a chosen
 * location
 * */
const fs = require("fs");
const util = require("util");

/**Content that will be written to the file */
const md = `
# This is a new file

We can write text to a file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile

`;

/*writeFile writes content to a specific directory and allows you to assign
 it a specific file name, it takes in the content that you want to add to
 the file followed by an error callback function. The version used below is
 the blocking version, meaning it will need to finish before any other process
 can be started. The asynchronous version is writeFileSync which allows for
 the same options, however, this one does not block the main thread from
 executing*/
 executing*/
fs.writeFile("./assets/notes.md", md.trim(), err => {
    if (err) {
        throw err;
    }
    util.log("The file has been written!");
});