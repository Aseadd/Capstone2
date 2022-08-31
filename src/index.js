// import _ from 'lodash';
import { isMatch } from 'lodash';
import './style.css';
import displayDom from './module/displayDom.js';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
displayDom(url);
