import axios from "axios";

export const getAllCategories = async () => {
    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    const categories = res.data.categories
    return categories
};
