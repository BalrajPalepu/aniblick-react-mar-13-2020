function foo( x, y, z ) {
    console.log( x, y, z );
    console.log( arguments );
    console.log( arguments );
}

foo( 12, 13 ); // x -> 12, y -> 13, z -> undefined, arguments -> { "0": 12, "1": 13, length: 2 }

foo( 12, 13, 14, 15 ); // x -> 12, y -> 13, z -> 14, arguments -> { "0": 12, "1": 13, "2": 14, "3": 15, length: 4 }