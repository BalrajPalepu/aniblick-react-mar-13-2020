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

class Employee extends Person {
    // default contructor looks like this
    // constructor( ...args ) {
    //     super( ...args )
    // }

    constructor( name, age, dept, role ) {
        super( name, age );

        this.dept = dept;
        this.role = role;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    celebrateBirthday() {
        super.celebrateBirthday();
        console.log( 'happy birthday' );
    }
}

const john = new Employee( 'John', 32, 'IT', 'Web developer' ); // { }
john.celebrateBirthday();
john.promote();
console.log( john );