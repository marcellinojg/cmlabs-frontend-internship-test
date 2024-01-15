import CategoryJumbotron from "../components/CategoryJumbotron";
import DefaultLayout from "../layouts/DefaultLayout";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMealsByCategoryName } from "../api/meals";
import { getAllCategories } from "../api/categories";
import ScreenLoader from "../components/ScreenLoader";
import MealCard from "../components/MealCard";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { isLoading: isLoadingMeals, data: meals } = useQuery(
    ["meals-by-category", categoryName],
    () => getMealsByCategoryName(categoryName)
  );

  const { isLoading: isLoadingCategories, data: categories } = useQuery(
    "categories",
    getAllCategories
  );

  return (
    <DefaultLayout>
      <section id="mealList" className="min-w-screen min-h-screen mb-24 pt-28">
        {isLoadingMeals || isLoadingCategories ? (
          <ScreenLoader />
        ) : (
          <>
            <CategoryJumbotron
              {...categories.filter(
                ({ strCategory }) => strCategory.toLowerCase() === categoryName
              )[0]}
            />
            <div className="pt-8 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 w-11/12 mx-auto">
              {meals.map((meal) => (
                <MealCard {...meal} strCategory={categoryName} />
              ))}
            </div>
          </>
        )}
      </section>
    </DefaultLayout>
  );
};

export default CategoryPage;
