// do not show API key on your JS file like this
const API_KEY = `da7d42383d10f56640bc86d142a1986d`;
const loadTemp = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data));
}

const displayTemp = data => {
    // const Temperature = document.getElementById('Temperature');
    // console.log(data.main.temp);
    setInnerTextById('Temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main)
    console.log(data.weather[0].main);

}

const setInnerTextById = (id, text) => {
    const temp = document.getElementById(id);
    temp.innerText = text;
}

document.getElementById('btn-search').addEventListener('click',function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city_name').innerText = city;
    loadTemp(city);

})

loadTemp('dhaka');