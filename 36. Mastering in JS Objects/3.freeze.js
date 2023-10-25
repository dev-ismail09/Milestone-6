const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity:1 };
const name = ['Rofik', 'Sofik', 'Jabbar'];
const keys = Object.keys(bottle);
const values = Object.values(bottle);
// console.log(keys, values);
// console.log(typeof keys, typeof values);
console.log(typeof bottle);
console.log(typeof name);

const pair = Object.entries(bottle);
console.log(pair);
const twoDimensionArray = [ [ 'color', 'yellow' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ] ];

console.log(bottle);
Object.seal(bottle); // seal korle r delete korte parbe na but modifacation korte parbe but also new property add korte parbe na
// Object.freeze(bottle); // sobar bap- kisu e kora jabe na ja ase tai it's freeze
delete bottle.isCleaned;
bottle.price = 1000;
bottle.height = 12; // new property add hobe na jodi seal kora thake
console.log(bottle);