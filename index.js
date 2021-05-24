const Volvo = require('./js/Volvo');
const Man = require('./js/Man');

const volvo = new Volvo('Volvo', 'left', 5, 4);
volvo.turnOnEngine();
console.log(volvo);

const man = new Man('Man', 'right', 4, 4);
man.honk();
console.log(man);
