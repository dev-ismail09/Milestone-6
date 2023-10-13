// part-1- show phones

const loadPhones = (searchText, dataLimit) =>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then(res => res.json())
    .then(data => displayPhones(data.data, dataLimit))
}

const displayPhones = (phones, dataLimit) =>{
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.textContent = '';

    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > 10){
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else{
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



    phones.forEach(phone =>{
        // console.log(phone.image)
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-3">
        <img src=" ${phone.image} " class="card-img-top w-25 px-1" alt="...">
        <div class="card-body">
          <h5 class="card-title"> ${phone.phone_name} </h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button class="btn btn-success"> Details </button>
        </div>
      </div>
        `;
        phonesContainer.appendChild(phoneDiv);
    })



}


// part-2- search field

const processSearch = (dataLimit) => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    loadPhones(searchValue, dataLimit);
    searchField.value = '';
    
}



document.getElementById('btn-search').addEventListener('click', function(){
    processSearch(10);
});


// not the best way to load show all

// show all 

document.getElementById('btn-show-all').addEventListener('click', function(){
    processSearch();
})



loadPhones('apple');