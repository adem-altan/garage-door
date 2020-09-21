var express = require("express");
var app = express();

var gpiop = require('rpi-gpio').promise;

gpiop.setup(22, gpiop.DIR_OUT)
	    .then(() => {
		return gpiop.write(22, true);              
	    })
	    .catch((err) => {
		console.log('Error: ', err.toString())
	    });

app.get('/', (req, res) => res.status(200).json({ result: 'It Works on PI!' }));

app.listen(3001, () => {
    console.log("Server running on port 3001");
});