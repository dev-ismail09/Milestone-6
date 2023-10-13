// forEach don't gives return value

const friends = ['Abir', 'Hemel', 'Toufek', 'Nasir'];
friends.forEach(friends => console.log(friends));

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 55000},
    {id: 1, name: 'watch', price: 4000},
    {id: 1, name: 'tablet', price: 15000},
];

products.forEach(products => console.log(products));