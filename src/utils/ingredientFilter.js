

const filterIngredients = (meal, searchKey) => Object.entries(meal).filter(([key, value]) => key.includes(searchKey) && value).map(([key,value]) => value)

export default filterIngredients