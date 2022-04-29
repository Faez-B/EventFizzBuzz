const EventEmitter = require('events');

class Logger extends EventEmitter {

    log(nombre) {
        this.emit("FizzBuzz", nombre);
    }

}

module.exports = Logger;