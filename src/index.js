// import _ from 'lodash';
import './style.css';
import displayDom from './module/displayDom.js';
import { isMatch } from 'lodash';

const image =
  'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
displayDom(url);

// const card = document.querySelector('.meal-img');
// const img = document.createElement('img');
// img.classList.add('card-img-top');
// img.setAttribute('src', image);
// card.appendChild(img);
