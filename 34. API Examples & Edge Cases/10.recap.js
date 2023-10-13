const loadMeals = (dynamicText) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dynamicText}`)
    .then(res => res.json())
    .then(data => displayMelas(data.meals))
}

const displayMelas = meals =>{
    const cardSection = document.getElementById('card-section');
    cardSection.textContent = '';
    meals.forEach(meal => {
        console.log(meal.strMealThumb);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card">
         <img src=" ${meal.strMealThumb} " class="card-img-top" alt="...">
         <div class="card-body">
          <h5 class="card-title"> ${meal.strMeal} </h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick = "loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#idMeal">
           Details
          </button>
        </div>
      </div>
        `;
        cardSection.appendChild(mealDiv);
    })
    
}


const searchMeals = () =>{
    const searchText = document.getElementById('search-field');
    const searchValue = searchText.value;
    // console.log(searchValue);
    loadMeals(searchValue);
    searchText.value = '';
}

// next part


const loadMealDetail = idMeal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetalis(data.meals[0]))
}

const displayMealDetalis = meal =>{
    console.log(meal);
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


