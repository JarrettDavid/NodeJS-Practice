/*
 const [, , firstName, lastName] = process.argv //example of array destructured 


console.log(process.versions.node); //used for obtaining the verion of node js running on that process
console.log(process.argv); //An array starting with the location of node followed by the location of
                            the process, you can also add user input from the command line to the array
console.log(process.argv[0]); //used for getting the value in the first position of the arguments array
*/

/* Grab - used for grabbing the contents after the flag */
console.log("Process ID: ", process.pid); //used for obtaining the process id
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
};//end of Grab

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);
console.log(`Contents of the arguments array ${process.argv.length} \n`);
for (let i = 0; i <= process.argv.length - 1; i++)
{
    console.log(` ${i}. ${process.argv[i]} \n`);
}//end of for loop

/*console.log(`Your name is ${firstName} ${lastName}`);*/