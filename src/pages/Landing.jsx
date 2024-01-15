import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import DefaultLayout from "../layouts/DefaultLayout";
import { HashLink } from "react-router-hash-link";
import { useQuery } from "react-query";
import { getAllCategories } from "../api/categories";
import { CategorySkeleton } from "../components/Skeletons";
import createArray from "../utils/createArray";
import CategoryCard from "../components/CategoryCard";

const LandingPage = () => {
  const { isLoading, data: categories } = useQuery(
    "categories",
    getAllCategories
  );

  return (
    <DefaultLayout>
      <section
        id="landing"
        className="min-w-screen min-h-screen grid place-items-center"
      >
        <div className="w-11/12 grid lg:grid-cols-2 grid-cols-1  gap-4 place-items-center md:mt-0 mt-28">
          <article className="space-y-2 text-havelock-blue-950">
            <h1 className="font-bold lg:text-5xl text-3xl font-family-secondary pb-4">
              Cooking Discovery
            </h1>
            <h2 className="font-bold lg:text-2xl text-xl text-havelock-blue-900">
              Unleash Culinary Magic
            </h2>
            <h2 className="font-bold lg:text-2xl text-xl text-havelock-blue-900 pb-4">
              Explore, Create, Savor! Your Epicurean Adventure Starts Here.
            </h2>
            <HashLink
              to="#categories"
              className="bg-havelock-blue-950 hover:bg-havelock-blue-900 font-bold transition duration-300 px-6 py-3 rounded shadow text-white flex items-center justify-center gap-2.5 group md:w-[150px] w-full"
            >
              Discover{" "}
              <FaArrowDown className="group-hover:translate-y-1 transition duration-300" />
            </HashLink>
          </article>
          <aside>
            <img
              src="./images/cooking.png"
              alt="Cooking Illustration"
              className="md:w-1/2 w-3/4 mx-auto"
              width={450}
            />
          </aside>
        </div>
      </section>

      <section id="categories" className="mb-24">
        <div className="w-11/12 mt-16 mx-auto space-y-2">
          <h1 className="font-bold lg:text-4xl text-2xl lg:text-start text-center">
            Food Categories
          </h1>
          <p className="text-lg lg:text-start text-center">
            Find delicious food recipes from our catalogs !
          </p>
          <div className="pt-8 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            {isLoading ? createArray(8).map((num) => <CategorySkeleton key={num} />)  : 
              categories.map((category) => <CategoryCard {...category}/>)
            }
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default LandingPage;
