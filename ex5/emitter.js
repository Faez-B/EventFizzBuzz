const EventEmitter = require('events');

class Logger extends EventEmitter {

    log(nombre) {
        this.emit("FizzBuzz", nombre);
    }

}

// const test = new Logger();
// test.log(3);

module.exports = Logger;