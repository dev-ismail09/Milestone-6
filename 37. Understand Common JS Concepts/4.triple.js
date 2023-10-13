// always use ===
// equal comparison doesnot work for non-primitive
// 1, ture / 0 , false ==
const first = 0;
const second = false;
if(first == second){
    console.log('Values are equal')
}
else{
    console.log('Values are not equal');
}