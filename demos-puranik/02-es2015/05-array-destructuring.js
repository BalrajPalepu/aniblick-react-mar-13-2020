// create variables that hold items 
const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

// const first = days[0], fifth = days[4];
const [ first, , , , fifth = 'Holiday', sixth = 'Holiday' ] = days;

console.log( first, fifth, sixth );
