const Transportas = require('./Transportas');

class Sunkvezimiai extends Transportas {
    constructor(name, steeringWheelPosition, seatCount, wheelCount) {
        super(name, steeringWheelPosition, seatCount, wheelCount);
    }
}

module.exports = Sunkvezimiai;