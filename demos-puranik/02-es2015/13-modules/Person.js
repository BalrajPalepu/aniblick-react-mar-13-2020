// "default export"
export default class Person {
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

export function foo() {
    console.log( 'foo' );
}