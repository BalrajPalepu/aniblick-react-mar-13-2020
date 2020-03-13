var phones = [
    { name : 'Samsung Galaxy S10+ Plus', price: 620, type: 'refurbished', manufacturer: 'Samsung' },
    { name : 'Apple iPhone 7 Plus', price: 450, type: 'refurbished', manufacturer: 'Apple' },
    { name : 'One Plus 6', price: 430, type: 'new', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone Xs', price: 910, type: 'new', manufacturer: 'Apple' },
    { name : 'One Plus 7', price: 430, type: 'refurbished', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone 8 Plus', price: 610, type: 'new', manufacturer: 'Apple' },
];

// iterator - forEach (like a for loop)
phones.forEach(function( item, index ) {
    console.log( index, item.name );
});

// filter() 
var phonesUnder500 = phones.filter(function( item, index ) {
    return item.price < 500;
});
console.log( phonesUnder500 );

// map()
var taxForPhones = phones.map(function( item, index ) {
    return item.price * 0.1;
});
console.log( taxForPhones );

var taxForPhones = phones.map(function( item, index ) {
    return {
        price: item.price,
        tax: item.price * 0.1
    };
});
console.log( taxForPhones );