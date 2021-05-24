const Sunkvezimiai = require('./Sunkvezimiai');

class Man extends Sunkvezimiai {
    constructor(name, steeringWheelPosition, seatCount, wheelCount) {
        super(name, steeringWheelPosition, seatCount, wheelCount);
    }
}

module.exports = Man;