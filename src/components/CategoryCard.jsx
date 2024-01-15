import { Link } from "react-router-dom";
import { DYNAMIC_ROUTES } from "../constant/routes";

const CategoryCard = (props) => {
  const { strCategory, strCategoryThumb } = props;
  return (
    <Link to={DYNAMIC_ROUTES.CATEGORY(strCategory.toLowerCase())} className="relative shadow-xl">
      <img
        src={strCategoryThumb}
        alt={`${strCategory} category thumbnail`}
        className="mx-auto"
        width={350}
      />
      <div className="absolute top-0 left-0 bg-havelock-blue-950 bg-opacity-40 hover:bg-opacity-60 transition duration-300 w-full h-full rounded grid place-items-center">
        <h1 className="font-bold text-3xl text-white">{strCategory}</h1>
      </div>
    </Link>
  );
};

export default CategoryCard;
