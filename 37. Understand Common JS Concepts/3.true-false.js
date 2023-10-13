/*
Truthy: 
1. true
2. any number(+ve, -ve) will be truthy other than 0
3. any string will be truthy other than empty string
4. '0', 'false'
5. {} (empty object)
6. [] (empty array)

Falsy:
1. false
2. 0
3. ''(empty string)
4. undefined
5. null
*/

// const x = "0";
let x = {};
console.log(x);
if(x){
    // console.log('Value of x is truthy');
}
else{
    // console.log('Value of x is falsy');
}

// optional
// check falsy - (!x - it's true )
const y = 0;
if(!y){
  console.log('Value is Falsy');
}
else{
    console.log("if a duke nai ber hoye cole asse")
}

// check truthy
const z = {};
if(!!z){
    console.log('Value is Truthy');
}