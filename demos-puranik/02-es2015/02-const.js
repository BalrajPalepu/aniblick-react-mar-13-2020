// const x;

const x = 1;
// x = 2; // error

const john = {
    name: 'JOhn',
    age: 32
};

// john = { // error
//     name: 'John',
//     age: 33
// };

// object is mutable - allowed
john.age++; // age becomes 33
console.log( john ); // age will be 33

// Object.freeze( john ) will make the object immutable

const numbers = [ 1, 2 ]; // we can still add and remove items
numbers.push( 3 );
console.log( numbers );