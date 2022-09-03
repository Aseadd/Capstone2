/** * @jest-environment jsdom */
import likesApi from '../likesApi.js';

describe('Test the likes', () => {
  test('true true', () => {
    expect(true).toBe(true);
  });
  test('Array [1,2,3,4,5,6] should return 6', () => {
    const likes = likesApi.countLikes([1, 2, 3, 4, 5, 6]);
    expect(likes).toBe(21);
  });
});
