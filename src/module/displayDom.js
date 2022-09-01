import getMeals from './mealApi.js';
import likesApi from './likesApi.js';

const displayDom = async (url) => {
  const result = document.querySelector('.row');
  // const imgBackColor = document.querySelector('.img');
  const meals = await getMeals(url);
  const allLikes = await likesApi.getAllLikes();
  // const mealList = JSON.parse(meals);
  // console.log(meals);

  let mealsHtml = '';
  for (let i = 0; i < meals.meals.length; i += 1) {
    const { idMeal } = meals.meals[i];
    const { likes } = allLikes.filter((e) => e.item_id === idMeal)[0] || {
      likes: 0,
    };
    // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // imgBackColor.style.backgroundColor = '#' + randomColor;
    // imgBackColor.innerHTML = '#' + randomColor;
    mealsHtml += ` 
      <div class='col mt-4 pe-0'>
        <div class="card" style="width: 20rem;">
          <img src="${meals.meals[i].strMealThumb}" class="card-img-top img" alt="...">
          <div class="card-body text-black ">
            <div class="title-like">
              <h5 class="card-title"> ${meals.meals[i].strMeal}</h5>
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
