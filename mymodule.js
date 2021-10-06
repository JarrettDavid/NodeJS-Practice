// JavaScript source code
/* Here we are treating our JS file like a module and passing values
 * or objects containing functions that can be used by another JS
 * file or module*/

/* declaring the count variable. The variables can not be passed
 * from module to module directly. You will have to use a function*/
let count = 0;

/* Functions that can be accessed when the module is added to another
 * module or JS file*/

//function for incrementing count
const inc = () => ++count;

//function for decrementing count
const dec = () => --count;

//function for getting the count value
const getCount = () => count;

/* Creating an export object of the functions created in this
 * module. This allows another module or JS file to access them*/
module.exports = {
    inc,
    dec,
    getCount
};
/*
 * Original example exporting my name. This will allows another JS
 * file to print string
module.exports = "Exported String";
*/