// ... (rest)
// 1. with the last argument of a function
function foo( x, y, ...z ) {
    console.log( x, y, z );
}

foo( 1, 2, 3, 4, 5, 6 );

// 2. During array destructuring
const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

// const first = days[0], fifth = days[4];
const [ first, , third, ...restOfDays ] = days;
console.log( first, third, restOfDays );

// 3. During object destructuring
let john = {
    name: 'John DOe',
    age: 32,
    emailids: [
        'john.doe@example.com',
        'john.doe@gmail.com',
    ],
    address: {
        firstline: '32, Rosewell Court',
        city: 'San Francisco',
        zip: 52110
    }
};

// rest operator produces an object in this case
const { name, emailids: [ primaryEmailid ], ...otherDetailsPartial } = john;
console.log( otherDetailsPartial );