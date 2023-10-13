// way-1
/*
 fetch('https://jsonplaceholder.typicode.com/todos/1')  // get the data from the url
       .then(response => response.json()) // .json is not similar but close o JSON.parse // converts the data to JSON object
       .then(json => console.log(json)) // displays the JSON object
*/

// way-2
/*
const url = 'https://jsonplaceholder.typicode.com/todos/1';
   fetch(url)  // এইটারে কল করার পরে 
   .then(response => response.json()) // কল করার পরে যখন কিছু একটা দেই , তখন সেইটাকে JSON এর একটা প্রমিস এ converted করবো, JSON() ফাংশন তখন আর একটা প্রমিস return করে
   .then(json => console.log(json)) // সেই JSON টাকে আউটপুট করবে
*/

function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}