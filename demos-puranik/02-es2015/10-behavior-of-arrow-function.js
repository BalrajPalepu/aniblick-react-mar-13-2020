function outer() {
    console.log( 'outer this = ', this );

    const inner1 = function() {
        console.log( 'inner1 this = ', this );
    };
    
    // inner gets the "this" from the enclosing function's (outer) "this"
    const inner2 = () => {
        console.log( 'inner2 this = ', this );
    };

    inner1();
    inner2();
}

outer(); // outer this -> window, inner1 this -> window, inner2 this -> window
outer.call( { x: 1 } ); // outer this -> { x: 1 }, inner1 this -> window, inner2 this -> { x: 1 }

// What is the output? (run the code in browser)