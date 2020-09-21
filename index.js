var express = require("express");
var app = express();

var wpi = require('wiringpi-node');


//var shell_exec = require('shell_exec').shell_exec;
//var result = shell_exec('/usr/local/bin/gpio -g write 24 1');

var res = wpi.digitalWrite(5, 0);

app.get('/', (req, res) => res.status(200).json({ result: 'It Works on PI!' }));

app.listen(3001, () => {
    console.log("Server running on port 3001");
    //shell_exec('/usr/local/bin/gpio -g write 24 1');
    console.log(res);


});