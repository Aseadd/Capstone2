import Meal from '../meal.js';

const m = new Meal();
describe('Test the likes', () => {
  test('true true', () => {
    expect(true).toBe(true);
  });
  test('setCount(5)  should return 5', () => {
    m.setCount(5);
    const likes = m.getCount();
    expect(likes).toBe(5);
  });
});
