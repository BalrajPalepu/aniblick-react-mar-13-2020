function sum1( x, y ) {
    return x + y;
}

console.log( sum1( 12, 13 ) );

const sum2 = function( x, y ) {
    return x + y;
};

console.log( sum2( 12, 13 ) );


// arrow function syntax
const sum3 = ( x, y ) => {
    return x + y;
};

console.log( sum3( 12, 13 ) );

const sum4 = ( x, y ) => x + y;

console.log( sum4( 12, 13 ) );

// Exercise: Write a function that returns the square of a number
const square = x => x * x; // parenthesis is not required around the argument for function with only 1 argument