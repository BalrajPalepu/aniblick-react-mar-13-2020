const name = 'John';
const age = 32;
const ADDRESS_KEY = 'address';

// introduced in es2015
const john = {
    name, // name: name
    grayHairs: age,
    celebrateBirthday() {
        this.age++;
    },
    [ADDRESS_KEY]: {
        city: 'Hyderabad'
    }
};

console.log( john );