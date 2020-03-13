import Human, { foo as FOO } from './Person.js';

export class Employee extends Human {
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