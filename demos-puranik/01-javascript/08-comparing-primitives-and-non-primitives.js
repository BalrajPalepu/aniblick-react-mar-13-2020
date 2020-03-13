var john = {
    name: 'John',
    age: 32
}

var johnCopy = {
    name: 'John',
    age: 32
}

console.log( john === johnCopy ); // false
console.log( john.name === johnCopy.name && john.age === johnCopy.age );

// iterating through object's properties : for..in loop,. Object.keys(), Object.values()