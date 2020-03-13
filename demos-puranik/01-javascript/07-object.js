// objects can be created without defining classes
// "object literals"
var john = {
    "name": 'John',
    age: 32,
    "primary email": [
        'john@gmail.com',
        'john@xyz.com'
    ],
    address: {
        city: 'Hyderabad',
        pinCode: 400301
    },
    celebrateBirthday: function() {
        this.age++;
    }
};

console.log( john.age );
console.log( john["address"]["city"] );
console.log( john["primary email"][1] );

john.celebrateBirthday();


john["better half"] = {
    name: 'jane',
    age: 28
};

john.setName = function( name ) {
    this.name = name;
};

console.log( john );
