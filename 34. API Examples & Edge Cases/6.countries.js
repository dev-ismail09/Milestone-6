// https://restcountries.com/#endpoints-all

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById('all-countries');
    // console.log(countries);
    // for loop
    // for(const country of countries){
    //     console.log(country)
    // }

    countries.forEach(country => {
        // console.log(country.cca2)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
           <h3>Name: ${country.name.common} </h3>
           <p>Capital: ${country.capital? country.capital[0]: 'No Capital'} </p>
           <button onclick = "loadCountriesDetalis('${country.cca2}')" >Detalis</button>
           
        `        
        countriesContainer.appendChild(countryDiv)
    })


}

// next part

const  loadCountriesDetalis = code => {
    //https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetail(data[0]));
}

const showCountryDetail = country => {
    console.log(country.name.common)
    const detalisContainer = document.getElementById('country-detalis');
    detalisContainer.innerHTML = `
        <h3> Name: ${country.name.common} </h3>
        <img src = "${country.flags.png}">
    `
}

loadCountries();