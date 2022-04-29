const Logger = require('./emitter');

const logger = new Logger();

logger.on('FizzBuzz', function(payload) {
    // mutliple de 5 et de 3
    if (payload % 5 == 0 && payload % 3 == 0) {
        console.log("FizzBuzz");
    } 
    
    // mutliple de 5
    else if (payload % 5 == 0) {
        console.log("Buzz");
    }

    // mutliple de 3
    else if (payload % 3 == 0){
        console.log("Fizz");
    }
    
    // ça ne correspond à aucun cas on retourne le nombre
    else {
        console.log(payload);
    }
    
})

module.exports = logger;