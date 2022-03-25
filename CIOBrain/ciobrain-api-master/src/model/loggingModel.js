XLSX = require('xlsx');
var fs = require("fs");

let loggingModel = {
    push: (data, details, dateTime = null) => {
        if(!dateTime) {
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            dateTime = date+' '+time;
        }
        fs.appendFile(__dirname + "/../data/log.txt", dateTime + " " + data + "\n\tDetails: " +details + '\n', (err) => {
            if (err) {
                console.log(err);
                return false;
            }
            return true;
          });
    }
}

module.exports = loggingModel;