function foo( a ) {
    var b = 2;

    function bar( p ) { // bar is local to foo
        var q = 4;
        var b = 200;
        
        console.log( a, b ); // 1, 200 - inner function can access the outer function's variables
        console.log( p, q );
    }

    bar( 3 );
    console.log( a, b );
    // console.log( p, q ); // error
}

foo( 1 );
// bar(); // error