var express = require("express");
var app = express();
var gpio = require('rpi-gpio').promise;
var localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel(3005, { subdomain: 'mygaragedoor' });
  console.log(tunnel.url);
})();

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

app.post('/open', (req, res) => {
    openClose();
    console.log("Button triggered!");
    res.status(200).json({ result: 'Button triggered!' }).end(); 
});

app.listen(3005, () => {
    console.log("Server running on port 3005");
});