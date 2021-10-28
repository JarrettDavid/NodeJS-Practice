/**In this script file or module we will be using the read stream module
 * to read from processes, the internet and the terminals*/
const fs = require('fs');
const util = require('util');


let fileText = "";

/**The Create Read Stream function allows a user to read the file input
 * located in a particular directory. If you want to encode the output
 * then you can add the encoding parameter to the end. The output of 
 * the file read is stored in a variable which can be used later in 
 * this code
 * */
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

util.log("type something...");
/*This reads text from the commandline and outputs the character length
 of the string you have typed in
process.stdin.on("data", data => {
    util.log(`I read ${data.length -1} characters of text`);
});
*/
/*This reads text from the readStream chunk by chunk. Each of those chunks
 * are read by the data events. Reading files using streams uses less 
 * memory because the file is not read all at once but in pieces using
 * events*/
readStream.on("data", data => {
    util.log(`I read ${data.length - 1} characters of text`);
    fileText += data;
});

/*You can create additional handlers to listen for data events. Once reads
 the first potion of the file, in this case we are just outputing that
 content to the terminal*/
readStream.once("data", data => {
    util.log(data);
});

/*This function has finished reading the file. It uses an empty callback
 function to return output message, in this case we are returning the
 file length, i.e. number of characters within it*/
readStream.on("end", () => {
    util.log("This process has finished reading the file!");
    util.log(`In total I read ${fileText.length - 1} characters of text`);
});