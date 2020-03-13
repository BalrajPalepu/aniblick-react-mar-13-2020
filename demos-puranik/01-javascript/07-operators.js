// +, -, *, /, %

// <, >, ==, !=, <=, >=

// ===, !== (opposite of ===)
// ALWAYS USE ===
console.log( 1 == 1 ); // true
console.log( 1 == "1" ); // true

console.log( 1 === 1 ); // true
console.log( 1 === "1" ); // false

var answer = 1 < 2 ? "one is less than 2" : "1 is not less than 2";
console.log( answer );