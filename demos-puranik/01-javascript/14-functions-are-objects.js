function foo() {
    var y;
    console.log( 'i am foo' );
}

foo.x = 1; // function can have its properties
foo.bar = function() { // function can have its methods
    var x;
    console.log( 'i am bar' );
};