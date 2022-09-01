// import _ from 'lodash';
import './style.css';
import displayDom from './module/displayDom.js';
import modalMethods from './module/modal.js';
import likesApi from './module/likesApi.js';
import commentApi from './module/commentApi.js';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
displayDom(url);

const allCards = document.querySelector('#allCards');
const likeSpan = document.querySelector('like');
allCards.addEventListener('click', (e) => {
  const text = e.target.textContent;
  if (text.trim() === 'Details') {
    const idMeal = e.target.id;
    const imgSrc = e.target.parentElement.parentElement.firstElementChild.src;
    const title = e.target.previousElementSibling.previousElementSibling.firstElementChild;
    const category = e.target.previousElementSibling.textContent;
    modalMethods.show(idMeal, imgSrc, title.textContent, category);
    modalMethods.showComment(idMeal);
  }
  if (text.includes('ღ')) {
    // The next line has slice(4) to erase the word "like": id="like12345" => 12345
    const idMeal = e.target.id.slice(4);
    likesApi.addLike(idMeal);
    const span = document.getElementById(e.target.id);
    const likes = Number(span.textContent.slice(1)) + 1;
    span.style.color = 'red';
    span.textContent = `ღ  ${likes}`;
    likeSpan.classList.toggle('active');
  }

  if (text.trim() === 'Comment') {
    e.preventDefault();
    let nameValue = document.getElementById('nameMealID').value;
    let commentValue = document.getElementById('commentMealID').value;
    const idMeal = e.target.id;
    commentApi.addComments(idMeal, nameValue, commentValue);
    nameValue = '';
    commentValue = '';
  }
});
