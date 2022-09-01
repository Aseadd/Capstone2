import commentApi from './commentApi.js';

const modalMethods = {
  async show(id, src, mealName, category) {
    // const meals = await getMeals(url);

    const modal = document.querySelector('#staticBackdrop');
    modal.innerHTML = '';
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
          <form id="form${id}" method="get" class='modalForm mt-2'>
            <h3>${category}</h3>
            <p>Your comment will be the number <span class="badge rounded-pill bg-info text-dark">32</span></p>
            <div class='justify-content-center input-group-sm'>
              <input class="form-control formInput" type="text" placeholder="Your name" name="name" id="nameMealID" required>
              <textarea class="form-control formInput mt-2" type="text" placeholder="Your comment" name="comment" id="commentMealID" required></textarea>
            </div>
            <div class="modal-footer mt-2 ma-0">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <input type="submit" value="Comment" class="submit btn btn-primary float-end" id="submit">
            </div>
          </form>
          <div class="commentSection">
            <p><span class="badge rounded-pill bg-dark">Addis Tsega 21/08/2022:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt fugit magnam laudantium perspiciatis impedit officiis! Modi quisquam ratione corrupti quaerat? Fugiat perspiciatis nulla cumque autem a nesciunt quidem placeat doloremque!</p>
          </div>
        </div>
      </div>
    `;
    modal.appendChild(allContent);
  },

  async showComment(id) {
    const commentList = document.querySelector('.commentSection');
    const allComments = await commentApi.getComments(id);
    const commentHtml = '';

    for (let i = 0; i < allComments.length; i += 1) {
      const idMeal1 = id.idMeal;
      const comments1 = allComments.filter((e) => e.item_id === idMeal1)[0].comments;
      commentHtml.innerHTML = ` <p><span class="badge rounded-pill bg-dark">Addis Tsega 21/08/2022:</span>${comments1} </p>`;
    }
    commentList.appendChild(commentHtml);
  },
};

export default modalMethods;
