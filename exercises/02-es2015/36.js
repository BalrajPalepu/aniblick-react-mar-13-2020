// 36. Write a function _sum_ that calculates and returns the sum of arguments (assume all arguments are numbers) passed to it, and call it like so. Use a rest parameter to implement this. 
function sum( ...arr ) {
    let sum = 0;

    for( let i = 0; i < arr.length; i++ ) {
        sum += arr[i];
    }

    return sum;
}

var result = sum( 1, 2, 3, 4 );
console.log( result ); // prints 10

var result = sum( 1, 2, 3, 4, 5  );
console.log( result ); // prints 15