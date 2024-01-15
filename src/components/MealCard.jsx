import { Link } from "react-router-dom";
import { DYNAMIC_ROUTES } from "../constant/routes";

const MealCard = (props) => {
  const { idMeal, strMeal, strMealThumb, strCategory } = props;
  return (
    <Link to={DYNAMIC_ROUTES.MEAL(strCategory, idMeal)} className="relative shadow-xl">
      <img
        src={strMealThumb}
        alt={`${strMeal} thumbnail`}
        className="mx-auto"
        width={350}
      />
      <div className="absolute top-0 left-0 bg-havelock-blue-950 bg-opacity-30 hover:bg-opacity-60 transition duration-300 w-full h-full rounded grid place-items-center">
        <h1 className="font-bold lg:text-3xl text-2xl text-white text-center">{strMeal}</h1>
      </div>
    </Link>
  );
};

export default MealCard;
