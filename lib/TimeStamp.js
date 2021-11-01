

function TimeStamp() {
    /**simplified call to get the date and time */
    let currentDate = new Date().toLocaleString();
    currentDate = '[' + currentDate + ']'
    /*Original means for geting the date and time */
    /*let dateTime;
    dateTime = '[' + (currentDate.getMonth() + 1) + '/' +
        currentDate.getDate() + '/' +
        currentDate.getFullYear() + " " +
        currentDate.getHours() + ':' +
        currentDate.getMinutes() + ':' +
        currentDate.getSeconds() + "] ";// JavaScript source code
    */
    return currentDate;
}
module.exports = TimeStamp();