function foo() {
    function f() {
        console.log( 'i am f' );
    }

    return f;
}

var result = foo(); // result = f
result();