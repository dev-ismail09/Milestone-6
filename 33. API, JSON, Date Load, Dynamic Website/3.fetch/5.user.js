function LoadUser() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url) // get the data from the url
        .then(res => res.json()) // converts the data to JSON object
        .then(data => displayUser(data)) // displays the JSON object
}

function displayUser(data){
    console.log(data)
}