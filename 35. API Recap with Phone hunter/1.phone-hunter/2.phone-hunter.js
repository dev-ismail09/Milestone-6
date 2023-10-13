const loadPhones = async (searchText, dataLimit) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    displayPhones(data.data, dataLimit)
}

const displayPhones = (phones, dataLimit) => {
    // console.log(phones);
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.textContent = '';
    // display 10 phones only
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }


    // display no phone
    const noPhone = document.getElementById('no-found-message');
    if (phones.length == 0) {
        noPhone.classList.remove('d-none'); // no found message show
    }
    else {
        noPhone.classList.add('d-none'); // again when phone show this time no found message hidden
    }
    // display phone


    phones.forEach(phone => {
        console.log(phone)
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.brand}</p>
                <img src = "${phone.image}">
                <button type="button" onclick = "loadPhoneDetalis('${phone.slug}')" class="btn btn-primary d-block my-3" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">
                   Show Detalis
                </button>
            </div>
        </div>
        `
        phonesContainer.appendChild(phoneDiv);
    });
    // stop spinner of loader
    toggleSpinner(false);
}


document.getElementById('search-phone').addEventListener('click', function () {
    // start loader
    // toggleSpinner(true);
    // const searchInput = document.getElementById('search-input');
    // const searchText = searchInput.value;
    // searchInput.value = '';
    // loadPhones(searchText);
    processSearch(10);

})

// search input field enter key handler
document.getElementById('search-input').addEventListener('keydown', function (e) {
    // console.log(event.key)
    if (e.key === 'Ender') {
        processSearch(10);
    }
});

// loader or spinner 

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loder-section');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }
}


// not the best way to load show all

// show all 
const processSearch = (dataLimit) => {
    toggleSpinner(true);
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';
    loadPhones(searchText, dataLimit);
}

document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
})


const loadPhoneDetalis = async (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data)
}

const displayPhoneDetails = phone => {
  const modalTitle = document.getElementById('phoneDetailsModalLabel');
  modalTitle.innerText = phone.name;
  const phoneDetails = document.getElementById('phone-details');
  phoneDetails.innerHTML = `
    <p> Release Data: ${phone.releaseDate ? phone.releaseDate : 'No ReleaseDate'} </p>
    <p> Others: ${phone.others ? phone.others.Bluetooth : "No Bluetooth"} </p>
    <p> Others: ${phone.mainFeatures ? phone.mainFeatures.storage : "No Storage"} </p>
    
  `
}

loadPhones('apple');