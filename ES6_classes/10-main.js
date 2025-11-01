import Car from './10-car.js';

class TestCar extends Car {}

const tc1 = new TestCar('Nissan', 'Turbo', 'Pink');
const tc2 = tc1.cloneCar();

console.log(tc1); // TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
console.log(tc1 instanceof TestCar); // true

console.log(tc2); // TestCar { _brand: undefined, _motor: undefined, _color: undefined }
console.log(tc2 instanceof TestCar); // true

console.log(tc1 == tc2); // false
