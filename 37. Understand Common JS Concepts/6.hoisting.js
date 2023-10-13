print10;
print5();
for(var i = 0; i < 5; i++){
    console.log(i);
}
console.log('Outside', i); // let thakle error dibe

// can use
function print5(){
    console.log(50);
}

// cannot use
const print10 = function(){
    console.log('inside print5', 100);
}