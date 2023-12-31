// API: https://www.themealdb.com/api.php

const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  console.log(url)
  fetch(url)
    .then(res => res.json())
    .then(data => displayMelas(data.meals))
}


const displayMelas = melas => {
  console.log(melas)
  // step-1: container element
  const mealsContainer = document.getElementById('meals-container');
  mealsContainer.innerHTML = '';
  melas.forEach(meal => {
    // console.log(meal.strInstructions)
    // step-2: create child for each element
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col');
    // step-3: set content of the child
    mealDiv.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick = "loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#idMeal">
           Details
          </button>
        </div>
      </div>
        `
    // step-4: appendChild
    mealsContainer.appendChild(mealDiv);
  })
}

const searchMeals = () => {
  const searchText = document.getElementById('search-field');
  const searchValue = searchText.value;
  // search melas
  // console.log(searchValue);
  loadMeals(searchValue);
  searchText.value = '';
}


const loadMealDetail = idMeal => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetalis(data.meals[0]))
    // error handler way 1
    .catch(error => {
      console.log(error)
    })

}

// async, await error handler
// const loadMealDetail2 = async (idMeal) => {
//   // error show in line number
//   try {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
//     const res = await fetch(url);
//     const data = await res.json();
//     displayMealDetalis(data.meals[0]);
//   }
//   catch(error){
//     console.log(error);
//   }
// }

const displayMealDetalis = meal => {
  console.log(meal)
  document.getElementById('idMealLabel').innerText = meal.strMeal;
  const mealsDetails = document.getElementById('mealDetailsBody');
  mealsDetails.innerHTML = `
       <img class = "img-fluid" src="${meal.strMealThumb}">
     `
  const strInstructions = document.getElementById('strInstructions');
  strInstructions.innerHTML = `
       <p class = "p-3" >Instructions: ${meal.strInstructions} </p>
     `
}

loadMeals('rice');