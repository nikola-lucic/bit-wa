const os = require('os'); //pozicanje modula za merenje memorije

const listeners = [];
let intervalID;

const start = () => {
    checkMem();
}
const stop = () => {
    clearInterval(intervalID);
}

const checkMem = () => {
    intervalID = setInterval(() => {//set intervalID je postavljen da bi imao kad da se zaustavi na stop()
        let freeMemory = os.freemem() / 1024 / 1024;
        if (freeMemory < 1000) {
            for (let i = 0; i < listeners.length; i++) {
                listeners[i](freeMemory);
            }
        } else 
        figlet
            ( console.log('Something went wrong...'))




    }, 1000);
}

const registerForAlerts = (callback) => {
    listeners.push(callback);//funkcinja koja prima checkMem kroz niz lisnter[]
}

module.exports.registerForAlerts = registerForAlerts;
module.exports.start = start;
module.exports.stop = stop;