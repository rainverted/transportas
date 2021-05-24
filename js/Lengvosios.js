const Transportas = require('./Transportas');

class Lengvosios extends Transportas {
    constructor(name, steeringWheelPosition, seatCount, wheelCount) {
        super(name, steeringWheelPosition, seatCount, wheelCount);
    }
}

module.exports = Lengvosios;