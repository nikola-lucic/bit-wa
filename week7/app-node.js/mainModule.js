const { registerForAlerts, start, stop } = require('./memoryModule.js');
const filglet = require('os');
start();
setTimeout(()=> {
   stop() 
}, 5000);

registerForAlerts((mesage) => {
    console.log(mesage);
});
