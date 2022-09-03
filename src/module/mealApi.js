const getMeals = async (url) => {
  const result = await fetch(url);
  const response = await result.json();
  return response;
};

export default getMeals;
