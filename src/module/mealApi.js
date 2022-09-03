const getMeals = async (url) => {
  const response = await fetch(url).then((response) => response.json());
  console.log(response);
  return response;
};

export default getMeals;
