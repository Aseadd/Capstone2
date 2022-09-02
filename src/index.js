// import _ from 'lodash';
import './style.css';
import displayDom from './module/displayDom.js';
import modalMethods from './module/modal.js';
import likesApi from './module/likesApi.js';
// import commentApi from './module/commentApi.js';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
displayDom(url);

const allCards = document.querySelector('#allCards');
const likeSpan = document.querySelector('like');
allCards.addEventListener('click', (e) => {
  const text = e.target.textContent;
  if (text.trim() === 'Details') {
    const idMeal = e.target.id;
    const imgSrc = e.target.parentElement.parentElement.firstElementChild.src;
    const title =
      e.target.previousElementSibling.previousElementSibling.firstElementChild;
    const category = e.target.previousElementSibling.textContent;
    modalMethods.show(idMeal, imgSrc, title.textContent, category);
    modalMethods.showComments(idMeal);
  }
  if (text.includes('ღ')) {
    // The next line has slice(4) to erase the word "like": id="like12345" => 12345
    const idMeal = e.target.id.slice(4);
    likesApi.addLike(idMeal);
    const span = document.getElementById(e.target.id);
    if (span) {
      const likes = Number(span.textContent.slice(1)) + 1;
      span.textContent = `ღ  ${likes}`;
      span.style.color = 'red';
      likeSpan.classList.toggle('active');
    }
  }
});

// const logo = document.querySelector('.logo');
// const logoImg = document.createElement('img');
// logoImg.setAttribute('src', './images/logo.svg');
// logoImg.setAttribute('alt', 'logo');
// logo.appendChild(logoImg);
