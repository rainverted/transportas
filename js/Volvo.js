const Lengvosios = require('./Lengvosios');

class Volvo extends Lengvosios {
    constructor(name, steeringWheelPosition, seatcount, wheelCount) {
        super(name, steeringWheelPosition, seatcount, wheelCount);
    }
}

module.exports = Volvo;