import commentApi from './commentApi.js';
import getMeals from './mealApi.js';

const modalMethods = {
  async show(idMeal) {
    const modal = document.querySelector('#staticBackdrop');
    modal.innerHTML = '';

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    const meals = await getMeals(url);
    const src = await meals.meals[0].strMealThumb;
    const mealName = await meals.meals[0].strMeal;
    const category = await meals.meals[0].strCategory;

    const allContent = document.createElement('div');
    allContent.classList.add('modal-dialog');
    allContent.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title" id="staticBackdropLabel">${mealName}</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src="${src}" class="img modalImg" alt="Meal Image">
          <form id="form${idMeal}" method="post" class='modalForm mt-2'>
            <h3>${category}</h3>
            <p>Comented <span id="commentCount" class="badge rounded-pill bg-info text-dark"></span> times</p>
            <div class='justify-content-center input-group-sm'>
              <input class="form-control formInput" type="text" placeholder="Your name" name="name" id="nameMealID" required>
              <textarea class="form-control formInput mt-2" type="text" placeholder="Your comment" name="comment" id="commentMealID" required></textarea>
            </div>
            <div class="modal-footer mt-2 ma-0">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <input type="submit" value="Comment" class="submit btn btn-primary float-end" id="submit">
            </div>
          </form>
          <div class="commentSection"></div>
        </div>
      </div>
    `;
    modal.appendChild(allContent);

    // Event listener to add comments
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.querySelector('#nameMealID').value;
      const comment = document.querySelector('#commentMealID').value;
      commentApi.addComment(idMeal, username, comment);

      const date = new Date();
      const creationDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

      const commentHtml = document.createElement('p');
      commentHtml.innerHTML = `<span class="badge rounded-pill">${username} ${creationDate}:</span> ${comment}`;

      const commentList = document.querySelector('.commentSection');
      commentList.appendChild(commentHtml);

      const commentCount = document.querySelector('#commentCount');
      const nextCount = Number(commentCount.textContent) + 1;
      commentCount.textContent = nextCount;

      form.reset();
    });
  },

  async showComments(idMeal) {
    const allComments = await commentApi.getComments(idMeal);
    const commentList = document.querySelector('.commentSection');

    const commentHtml = document.createElement('div');
    commentHtml.innerHTML = '';
    if (!allComments.error) {
      for (let i = 0; i < allComments.length; i += 1) {
        const { username, comment } = allComments[i];
        const creationDate = allComments[i].creation_date;
        commentHtml.innerHTML += `<p class= 'comment'><span class="badge rounded-pill">${username} ${creationDate}:</span> ${comment}</p>`;
        commentList.appendChild(commentHtml);
      }
    }

    const commentCount = document.querySelector('#commentCount');
    const nextCount = allComments.length || 0;
    commentCount.textContent = nextCount;
  },

  countComments() {
    const comments = document.querySelector('.commentSection').children;
    const nextCount = comments.length || 1;
    return nextCount;
  },
};

export default modalMethods;
