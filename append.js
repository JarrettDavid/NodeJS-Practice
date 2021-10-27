/**
 * This module or script file is used to append items to an existing file
 * using the fs module
 **/
const fs = require("fs");
const util = require("util");

/** Here we are first reading a .JSON file into a variable, these files
 * can be called using the require function and the path and the file
 * name*/
const colorData = require("./assets/colors.json");


/*
 
 */
colorData.colorList.forEach(c => {
    fs.appendFile("./storage-files/color.md", `${c.color}: ${c.hex} \n`, err => {
        if (err)
            throw err;
        util.log(`You have added ${c.color} to color.md \n`);
    });
});