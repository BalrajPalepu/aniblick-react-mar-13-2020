function foo( g ) {
    console.log( g );
    if( typeof g === 'function' ) {
        g();
    }
    console.log( 'i am foo' );
}

function f() {
    console.log( 'i am f' );
}

foo( 1 );

console.log( '-----------' );

foo( { x : 1 } );

console.log( '-----------' );

foo( f ); // g = f