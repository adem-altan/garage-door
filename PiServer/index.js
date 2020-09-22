var express = require("express");
var app = express();

var gpio = require('rpi-gpio').promise;

function openClose() {
    gpio.setup(22, gpio.DIR_OUT)
	    .then(() => {
		gpio.write(22, true);
                setTimeout(function() {
                    close();
                }, 1000);           
	    })
	    .catch((err) => {
		console.log('Error: ', err.toString())
	    });
}

function close() {
    gpio.setup(22, gpio.DIR_OUT)
	    .then(() => {
	    return gpio.write(22, false);      
	    })
	    .catch((err) => {
		console.log('Error: ', err.toString())
	    });
}

app.get('/', (req, res) => res.status(200).json({ result: 'It Works on PI!' }));

app.listen(3005, () => {
    console.log("Server running on port 3005");
    openClose();
});