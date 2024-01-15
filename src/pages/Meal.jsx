import DefaultLayout from "../layouts/DefaultLayout";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getMealById } from "../api/meals";
import ScreenLoader from "../components/ScreenLoader";
import filterIngredients from "../utils/ingredientFilter";

const MealPage = () => {
  const { mealId } = useParams();
  const { isLoading, data: meal } = useQuery(["meal", mealId], () =>
    getMealById(mealId)
  );
  const ingredientList = meal && filterIngredients(meal, "Ingredient");
  const measureList = meal && filterIngredients(meal, "Measure");
  const instructionList = meal && meal.strInstructions.split("\r\n");
  const youtubeId = meal && meal.strYoutube.split("watch?v=")[1];
  return (
    <DefaultLayout>
      <section id="mealDetail" className="min-w-screen min-h-screen mb-24 pt-28">
        {isLoading && !meal ? (
          <ScreenLoader />
        ) : (
          <div className="w-10/12 mx-auto space-y-2">
            <h1 className="font-bold lg:text-4xl text-2xl lg:text-start text-center">
              {meal.strMeal}
            </h1>
            <h2 className="lg:text-xl text-lg lg:text-start text-center">
              {meal.strArea} Cuisine
            </h2>
            <div className="grid lg:grid-cols-4 grid-cols-1 pt-8 gap-6">
              <img
                src={meal.strMealThumb}
                width={350}
                className="rounded shadow-xl col-span-1"
                alt={`${meal.strMeal} thumbnail`}
              />
              <div className="flex flex-col col-span-1">
                <h3 className="font-bold text-xl pb-2.5">Ingredients</h3>
                <ul className="list-disc ml-6 space-y-1">
                  {ingredientList.map((ingredient, index) => (
                    <li key={index}>
                      {measureList[index]} of {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col lg:col-span-2">
                <h3 className="font-bold text-xl pb-2.5">Instructions</h3>
                <ol className="list-decimal ml-3 space-y-1">
                  {instructionList.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
            <h3 className="font-bold lg:text-4xl text-2xl lg:text-start text-center pt-12 pb-6">
              Tutorial Video
            </h3>
            <iframe
              className="w-full h-[50vh]"
              src={`https://www.youtube.com/embed/${youtubeId}`}
            ></iframe>
          </div>
        )}
      </section>
    </DefaultLayout>
  );
};

export default MealPage;
