import getMeals from './mealApi.js';

const displayDom = async (url) => {
  const result = document.querySelector('.row');
  const meals = await getMeals(url);
  // const mealList = JSON.parse(meals);
  // console.log(meals);

  let mealsHtml = '';
  for (let i = 0; i < meals.meals.length; i += 1) {
    mealsHtml
    += ` 
    <div class='col mt-4 pe-0'>
      <div class="card" style="width: 20rem;">
        <img src="${meals.meals[i].strMealThumb}" class="card-img-top img" alt="...">
        <div class="card-body text-black ">
          <div class="title-like">
            <h5 class="card-title"> ${meals.meals[i].strMeal}</h5>
            <span id="like${meals.meals[i].idMeal}" class="ms-4 like">🖤</span>
          </div>
          <p class="card-text"> ${meals.meals[i].strCategory}</p>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Modal
          </button>
        </div>
      </div>
    </div>
  `;
    result.innerHTML = mealsHtml;
  }
};

export default displayDom;
