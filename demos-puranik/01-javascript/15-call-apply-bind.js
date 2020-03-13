function sum( x, y ) {
    console.log( 'this = ', this, x, y );

    return x + y;
}

// call, apply (similar to call), bind are 3 methods every function has

console.log( sum( 12, 13 ) ); // this -> window
console.log( '---------' );
console.log( sum.call( null, 12, 13 ) ); // same as sum( 12, 13 ), this -> window
console.log( '---------' );
console.log( sum.call( { x: 1 }, 12, 13 ) ); // same as sum( 12, 13 ), this -> { x: 1 }

console.log( '---------' );
var boundSum = sum.bind( null ); // sum and boundSum behave exactly same way

console.log( '---------' );
// boundSum2 will have the fixed context { x : 1 }
var boundSum2 = sum.bind( { x : 1 } );
boundSum2( 14, 15 ); // sum.call( { x: 1 }, 14, 15 );

var boundSum3 = boundSum2.bind( { x: 2 } );
boundSum3( 16, 17 ); // this -> { x : 1 }

var john = {
    name: 'John',
    age: 32,
    sum: boundSum2
};

john.sum(); // this -> { x: 1 } (normally it would have been john object)

// leading arguments can also be bound
var boundSum4 = sum.bind( { x : 1 }, 100 );
console.log( boundSum4( 101 ) ); // this -> { x : 1 }, x -> 100, y -> 101

// for( var i = 0, str = ''; i < 10; i++ ) {
//     str += i + ' ';
// }
// console.log( str );
