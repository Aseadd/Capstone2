// import _ from 'lodash';
import './style.css';
import displayDom from './module/displayDom.js';
import modalMethods from './module/modal.js';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
displayDom(url);

const allCards = document.querySelector('#allCards');
allCards.addEventListener('click', (e) => {
  console.log(e.target);
  console.log(e.target.id);
  // modalMethods.show();
});