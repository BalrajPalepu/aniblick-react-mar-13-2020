var numbers = [ 1, 2, 3, 4, 5 ];

console.log( numbers[0] );
console.log( numbers[4] );
console.log( numbers[numbers.length - 1] );

numbers[0] = 'One';

numbers[numbers.length] = 6;
numbers[numbers.length + 5] = 11;

numbers.push( 12 ); // adds the item to the end of array

console.log( numbers );