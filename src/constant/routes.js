export const ROUTES = {
  HOME: '/',
  HOME_LANDING: "/#landing",
  HOME_CATEGORY: "/#categories",
  CATEGORY: "/categories/:categoryName",
  MEAL: "/categories/:categoryName/meals/:mealId",
  HOME_CONTACT: "/#contact",
};

export const DYNAMIC_ROUTES = {
  CATEGORY: (categoryName) => `/categories/${categoryName}`,
  MEAL: (categoryName, mealId) => `/categories/${categoryName}/meals/${mealId}`,
};
