const john = {
    name: 'John',
    age: 32
};

const jane = {
    name: 'John',
    age: 32
};

console.log( john.__proto__ );
console.log( jane.__proto__ );

john.__proto__.x = 100;

john.__proto__.celebrateBirthday = function() {
    this.age++;
}

// set up commong methods on a common object that will be shared by objects that are similar
const proto = {
    celebrateBirthday: function() {
        this.age++;
    }
}

// 
Object.setPrototypeOf( john, proto );
Object.setPrototypeOf( jane, proto );