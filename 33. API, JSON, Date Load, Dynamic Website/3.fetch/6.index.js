function LoadUser2() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser2(data))
}
// function displayUser2(data){
//    for(const user of data){
//     // console.log(user);
//     // console.log(user.email);
//     console.log(user.name);

//    }
// }

function displayUser2(data){
    const UL = document.getElementById('users-list');
    for(const user of data){
        console.log(user);
        const li = document.createElement('li');
        li.innerText = user.name;
        UL.appendChild(li);
        
    }
    UL.appendChild(li);
}