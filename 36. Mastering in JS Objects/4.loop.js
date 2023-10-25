const numbers = [12, 54, 5, 21];
for(const number of numbers){
    console.log(number);
}

// 1. for of loop cannot be used with Object
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity:1 };

// we cannot use just need to see
const keys = Object.keys(bottle); // this one array so we can use now for fo loop , easy.
console.log(keys);
/*
3 ways to  read object properties
bottle.color
bottle['color']
bottle[key] // - value = property name gula theke value pabo
*/
for(const key of keys){
    // console.log(bottle[key, bottle[key]]);
}

// ************
//           for of loop - use array , cannot use object
// use most: for in loop - use object , cannot use array
for( const key in bottle ){
    const value = bottle[key];
    console.log(key, value);
}
// ************

// Advanced
const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}