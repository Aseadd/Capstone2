import Meal from '../meal.js';

const meal = new Meal();
const c = meal.getCount();
console.log(meal.getCount());

describe('If Meal length is 4', () => {
  expect(meal.getCount()).toEqual(4);
});
