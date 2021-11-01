/**In this script file or module we will be using the write stream function
 * as well as the read stream function available in the file stream module*/
const fs = require("fs");
/** created my own time stamp module */
const timeStamp = require("./lib/TimeStamp.js");

/**using the fs module to create read and write streams. The readStream
 is reading the text from the file while the write stream is used to 
 write data to a file*/
const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

/*
*Here we are writing input from the command line and sending it to the 
 * file called at line 8.
writeStream.write(`${timeStamp} Hello`);
writeStream.write(" World!\n");

*Here we are taking data from the terminal and sending it to the file
 * declared at line 8
process.stdin.out("data", data => {
    writeStream.write(data)
    process.exit();
});
*/
/*You can also pipe the input from the terminal to a write stream*/
//process.stdin.pipe(writeStream);

/*You can take the text from the read stream and send it to the 
 write tream. (i.e. copy the file)*/
readStream.pipe(writeStream);

/* You can take the text from the read stream and send it to the
 * write tream. (i.e. copy the file) 
readStream.on("data", data => {
    writeStream.write(data)
    process.exit();
});
*/