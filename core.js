// JavaScript source code CORE.JS file
const path = require("path");//used for path function
const util = require("util");//used for util.log
const v8 = require("v8");//used for getHeapStatistics

/* Alternate declaration for require functions. These are used if we need to use a specific
 * function within the module we are calling
 * const {log} = require("util");
 * const {getHeapStatistics} = require("v8");
 * 
 * log(getHeapStatistics());
 
   provides the same output, however, you will need to read through the
   requirement functinos in order to determine what is being called by what
 */

//The join function is used to find that path to a particular directory
//__dirname is used to get the current directory location while each name
// parameter is used to construct the path to the folder
const dirUploads = path.join(__dirname, "www", "files", "uploads");

console.log(dirUploads);


//the utilities log provides more information such as the date and timestamp
//this is very useful when needing to log actions, outputs and/or errors
util.log(path.basename(__filename));
util.log("^ The name of the current file");

//This is a function to get the memory usage and memory statistics
util.log(v8.getHeapStatistics());

