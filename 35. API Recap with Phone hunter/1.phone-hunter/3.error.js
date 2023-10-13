// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data));
// .catch(error => console.log(error));

const loadData = async() = {
    
}

try{
    const res = await fetch('url');
    const data = await res.json();
    console.log(data);
}
catch{

}

// document.getElementById('abd');

// sychronous asychronous

console.log(1);
setTimeout(() => {
    console.log(2)
}, 3000); // 3s pore show korbe
console.log(3);
console.log(15);
console.log(15);
console.log(15);
console.log(15);