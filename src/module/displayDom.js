import getMeals from './mealApi.js';
import likesApi from './likesApi.js';
import Meal from './meal.js';

const displayDom = async (url) => {
  const result = document.querySelector('.row');

  const meals = await getMeals(url);
  const allLikes = await likesApi.getAllLikes();

  const mealCount = new Meal();
  mealCount.setCount(meals.meals.length);
  let mealsHtml = '';
  for (let i = 0; i < meals.meals.length; i += 1) {
    const { idMeal } = meals.meals[i];
    const { likes } = allLikes.filter((e) => e.item_id === idMeal)[0] || {
      likes: 0,
    };
    mealsHtml += ` 
      <div class='col mt-4 pe-0'>
        <div class="card" style="width: 19rem;">
          <img src="${meals.meals[i].strMealThumb}" class="card-img-top img" alt="...">
          <div class="card-body text-black ">
            <div class="title-like">
              <h2 class="card-title"> ${meals.meals[i].strMeal}</h2>
              <span id="like${idMeal}" class="ms-4 like">ღ  ${likes}</span>
            </div>
            <p class="card-text"> ${meals.meals[i].strCategory}</p>
            <button id="${idMeal}" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Details
            </button>
          </div>
        </div>
      </div>
    `;
  }
  result.innerHTML = mealsHtml;

  const countMeals = document.querySelector('#count-likes');
  countMeals.textContent += `(${meals.meals.length} )`;
};

export default displayDom;
