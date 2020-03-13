// var result;

// callback function pattern to get result of a task that happens in future
function sum( x, y, cb ) {
    // hey browser, please call this function after 2s
    setTimeout(function() {
        result = x + y;
        cb( result );
    }, 2000);
}

// sum( 12, 13, function( result ) {
//     console.log( result );
// });

// How can we acheive this using the function sum() as defined above
// sum( 12, 13 ) -> sum( result, 14 ) -> sum( result2, 15 ) -> console.log( result3 )
sum( 12, 13, function( result ) {
    sum( result, 14, function( result2 ) {
        sum( result2, 15, function( result3 ) {
            console.log( result3 );
        });
    });
});