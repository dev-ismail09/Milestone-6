const max = Math.max(12, 85, 999, 78);
// console.log(max);
const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);


// const numbers2 = numbers;
const numbers2 = [...numbers]; // new arrow using previous numbers all value
const numbers3 = [68, 78, ...numbers, 22, 36];
numbers.push(55);
numbers2.push(777);
console.log(numbers);
console.log(numbers2);
console.log(numbers3);

// recap

const boroVai = Math.max(14, 16, 18, 21, 19);
// console.log(boroVai);
const numberss = [112, 65, 22, 145, 25];
const filterN = Math.max(...numberss);
console.log(filterN);