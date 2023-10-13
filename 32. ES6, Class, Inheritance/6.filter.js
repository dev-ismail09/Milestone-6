const numbers = [23, 53, ,2, 4, 6,34, 63, 66, 26];
const bigNum = numbers.filter(boro => boro > 20);
const tiny = numbers.filter(soto => soto < 10);
const even = numbers.filter(num => num % 2 === 0);
console.log(bigNum);
console.log(tiny);
console.log(even);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 55000},
    {id: 1, name: 'watch', price: 4000},
    {id: 1, name: 'tablet', price: 15000},
];

// const expensive = products.filter(products => products.price > 50000);
const expensive = products.filter(products => products.price < 500);
console.log(expensive);