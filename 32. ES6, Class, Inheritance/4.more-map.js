const numbers = [12, 34, 53, 63];
const half = numbers.map(n => n / 2);
const thirds = numbers.map(n => n / 3);
// console.log(half);
// console.log(thirds);

const friends = ['Abir', 'Hemel', 'Toufek', 'Nasir'];
const output = friends.map(friend => friend[0]);
console.log(output);
const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths);


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 55000},
    {id: 1, name: 'watch', price: 4000},
    {id: 1, name: 'tablet', price: 15000},
];

// const items = products.map(products => console.log(products.name));
const items = products.map(products => products.name);
const prices = products.map(p => p.price);
console.log(items);
console.log(prices);