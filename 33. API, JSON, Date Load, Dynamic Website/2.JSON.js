const user = {id: 1, name: 'Gorib Aamir', job: 'actor'};
// JavaScript Object Notation -> (JSON)
const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);
/*
{ id: 1, name: 'Gorib Aamir', job: 'actor' } // JS
{"id":1,"name":"Gorib Aamir","job":"actor"} // JSON
*/



const shop ={
    owner: 'Alia',
    address: {
        street: 'Kocukhet voot er goli',
        city: 'Rajshahi',
        country: 'BD'
    },
    revenue: 45000,
    isOpen: true,
    isNew: false
}

console.log(shop);
const ShopJSON = JSON.stringify(shop);
console.log(ShopJSON);
console.log(typeof ShopJSON);
const ShopJSONObj = JSON.parse(ShopJSON);
console.log(ShopJSONObj);
// console.log(typeof ShopJSONObj);