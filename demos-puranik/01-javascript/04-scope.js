var x = 1;

console.log( 'x in global space is ', x );

function foo() {
    var x = 4; // x which is local to foo (shadows the global x)
    var y = 2; // local to foo

    if( true ) {
        var z = 3; // this scoped to foo function
    }

    a = 100; // global variable

    console.log( 'x within foo is ', x ); // uses local x
    console.log( 'y within foo is ', y );
    console.log( 'z within foo is ', z );
    console.log( 'a within foo is ', a );
}

foo();

console.log( 'a in global space is ', a );

// console.log( 'y in global space is ', y ); // error