// other language
// int a = 5;
// string b = 'jibon';
// bool c = True;
// object student = {name: 'jibon', id: 55};
// string[] friends = ['abul', 'babul'];

// dynamic type language -> JS
const a = 5;
const b = 'jibon';
const c = true;
// those 3 are primitive => primitive type gula sudu matro single akrokom value nite pare
const ages = [45, 65, 45];
const student = {id: 23, class:7};
// those 2 are non-primitive => non-primitive type gula onek type er value nite pare
console.log(typeof a, typeof b, typeof c, typeof ages, typeof student);



let x = 5;
let y = x;
console.log(x,y);
y = 7;
console.log(x,y);

let p = {job: 'web developer'};
let q = p;
console.log(p, q);
// q = {job: 'backend developer'};
// console.log(p, q);
q.job = 'front end developer';
console.log(p, q);


