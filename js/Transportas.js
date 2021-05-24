class Transportas {
    constructor(name, steeringWheelPosition, seatCount, wheelCount) {
        this.name = name;
        this.steeringWheelPosition = steeringWheelPosition;
        this.seatCount = seatCount;
        this.wheelCount = wheelCount;
        this.engineIsOn = false;
        this.sound = 'beep';
    }

    turnOnEngine() {
        this.engineIsOn = true;
    }
    turnOffEngine() {
        this.engineIsOn = false;
    }

    honk() {
        console.log(`Car says ${this.sound}`);
    }
        
}

module.exports = Transportas;