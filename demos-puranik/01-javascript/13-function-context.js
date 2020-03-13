function foo() {
    // this -> function (call) context
    // default context is...
        // Node.js -> global object
        // browser window -> window
    console.log( this );
}

foo();

function celebrateBirthday() {
    this.age++;
}

const john = {
    name: 'John',
    age: 32,
    celebrateBirthday: celebrateBirthday,
    setName: function( name ) {
        console.log( this );
        this.name = name;
    }
};

var setName = john.setName;
console.clear();
console.log( setName === john.setName ); // true

john.setName() // this -> john
setName(); // this -> window

// celebrateBirthday(); // this -> window
// john.celebrateBirthday(); // this -> john

// john.setName( 'Jonathan' ); // this -> john

// console.clear();

// console.log( celebrateBirthday === john.celebrateBirthday ); // true