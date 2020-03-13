class Person {
    constructor( name, age ) {
        console.log( this ); // { }
        
        this.name = name;
        this.age = age;

        // return this;
    }

    celebrateBirthday() {
        this.age++;
    }
}

const john = new Person( 'John', 32 ); // { }
john.celebrateBirthday();
console.log( john );