// JavaScript source code
/*
 *You can treat files as modules that can be loaded using require()
 * You must specify the path to the file. In this case the app.js and
 * mymodule.js are in the same directory 
const name = require("./mymodule");

in the original example module.exports was set to a string variable
console.log("Your name is " + name);
*/

/*
 * In the updated mymodules code functions were created that can be
 * called when the require return is passed to a object
const counter = require("./mymodule");
//calling the inc (increment) function
counter.inc();
counter.inc();
counter.inc();

//calling the getCount function
console.log(counter.getCount());
*/
/* you can desructure the object so you are only getting what you need
 * from the mymodule module*/
const { inc, dec, getCount } = require("./mymodule");

//No object needed for an object. You can call the functions directly
inc();
inc();
inc();
dec();

console.log(getCount());