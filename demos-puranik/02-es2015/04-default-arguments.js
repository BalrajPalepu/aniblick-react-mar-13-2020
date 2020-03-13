function greeting( message = 'Hello', name = 'world' ) {
    console.log( `${message} ${name}!` );
}

greeting( 'Hello', 'world' );
greeting( 'Hello' );
greeting( 'Good morning' );
greeting();
greeting( undefined, 'John' );