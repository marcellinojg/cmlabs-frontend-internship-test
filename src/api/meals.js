import axios from "axios";

export const getMealsByCategoryName = async (category) => {
  const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const meals = res.data.meals
  return meals
};

export const getMealById = async (id) => {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const meal = res.data.meals[0]
    return meal
}
