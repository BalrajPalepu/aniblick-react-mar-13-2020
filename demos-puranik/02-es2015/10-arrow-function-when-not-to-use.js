// never write a method of an object using arrow function syntax
const john = {
    name: 'john',
    age: 32,
    celebrateBirthday: () => { // DONT DO THIS
        this.age++; // this -> window
    }
}

john.celebrateBirthday();
console.log( john );