const path = require("path"); //path is a built in library that is 
                              //being called.You can set library calls to a variable
/**/
console.log(__dirname); //used for getting the full path to the current directory
console.log(__filename); //used for getting the full path to the current file

console.log(`The file name is ${path.basename(__filename)}`); //.basename is function that allows you to output only the based name of a file
console.log(`The containing folder name is ${path.basename(__dirname)}`); //.basename is function that allows you to output only the based name of a folder