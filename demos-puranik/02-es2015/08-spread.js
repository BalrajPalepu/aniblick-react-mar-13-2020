// ... (spread)

// 1. along with an array
const numbers = [ 2, 3, 5, 7, 11, 13 ];
// ...numbers -> 2, 3, 5, 7, 11, 13

console.log( Math.max( ...numbers ) ); // Math.max( 2, 3, 5, 7, 11, 13 )

const arr1 = [ 1, 2, 3 ], arr2 = [ 4, 5, 6 ];

const arr3 = [];
arr3.push( ...arr1, ...arr2 );
console.log( arr3 );

const arr4 = [ ...arr1, ...arr2 ];
console.log( arr4 );

// 2. along with an object (not ES2015)
const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Hyderabad',
        pinCode: 400001
    }
};

const johnCopy = {
    ...john, // name: 'John', age: 32, address: john.address, name: 'Jonathan'
    name: 'Jonathan'
};

john.age++;
john.address.city = 'Bangalore';

console.log( john );
console.log( johnCopy );

const johnDeepCopy = {
    ...john,
    address: {
        ...john.address
    }
}

john.age++;
john.address.city = 'Chennai';

console.log( john );
console.log( johnDeepCopy ); // not affected by change in age and address

