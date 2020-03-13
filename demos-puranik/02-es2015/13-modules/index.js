import { Employee } from './Employee.js';

const john = new Employee( 'John', 32, 'IT', 'Web developer' ); // { }
john.celebrateBirthday();
john.promote();
console.log( john );