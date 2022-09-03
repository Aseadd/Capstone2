const getMeals = async (url) => {
  const response = await fetch(url).then((response) => response.json());
  return response;
};

export default getMeals;
