//https://randomuser.me/

const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;
    console.log(user.results[0].gender);
    const nameTag = document.getElementById('name');
    // nameTag.innerHTML = user.results[0].name.first;
    nameTag.innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    console.log(user.results[0].name.first);


    // location show
    const userLocation = document.getElementById('location');
    userLocation.innerHTML = user.results[0].location.street.number + ' ' + user.results[0].location.street.name + ' ' + user.results[0].location.city + ' ' + user.results[0].location.state + ' ' + user.results[0].location.country;
    // console.log(user.results[0].location.street.number);
    
    // photo show
    const ImageContainer = document.getElementById('image-container');
    const showImg = (user.results[0].picture.large);
    ImageContainer.innerHTML = `
      <img src = '${showImg}'>
    `

}

loadUser();