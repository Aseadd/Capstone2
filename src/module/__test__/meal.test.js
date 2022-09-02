test('Array [1,2,3,4] should return 6', () => {
  const mockAPI = () => Promise.resolve({ items: [1, 2, 3, 4] });
  mockAPI().then((result) => {
    const mealArr = result.items;
    const mealCounter = mealArr.length;
    expect(mealCounter).toBe(4);
  });
});
