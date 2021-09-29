const path = require("path"); //path is a built in library that is 
                              //being called.You can set library calls to a variable
/*
console.log(__dirname); //used for getting the current directory
console.log(__filename); //used for getting the current file name
*/
console.log(`The file name is ${path.basename(__filename)}`); //.basename is function that allows you to output only the based name of a file