let john = {
    name: 'John DOe',
    age: 32,
    emailids: [
        'john.doe@example.com',
        'john.doe@gmail.com',
    ],
    address: {
        firstline: '32, Rosewell Court',
        city: 'San Francisco',
        zip: 52110
    }
};

// Step 1: Comment out the below declaration statement and redo the same using the object destructuring syntax
// let name = john.name, grayHairs = john.age, primaryEmailid = john.emailids[0], city = john.address.city, country = john.address.country || 'USA';

const { name, age : grayHairs, emailids : [ primaryEmailid ], address : { city = 'New York', country = 'USA' } } = john

console.log( name, grayHairs, primaryEmailid, city, country );

// Step 2: Accept only first email id and city into the function using object/array destructuring
function postMessageTo( { emailids : [ primaryEmailId ], address: { zip } } ) {
    console.log( primaryEmailId, zip );
}

postMessageTo( john );