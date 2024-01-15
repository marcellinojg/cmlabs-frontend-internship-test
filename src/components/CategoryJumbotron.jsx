
const CategoryJumbotron = (props) => {
  const { strCategory, strCategoryThumb } = props;
  return (
    <div className="relative w-11/12 mx-auto shadow-xl">
      <img
        src={strCategoryThumb}
        alt={`${strCategory} category thumbnail`}
        className="mx-auto py-8"
        width={350}
      />
      <div className="absolute top-0 left-0 bg-havelock-blue-950 bg-opacity-60 w-full h-full rounded grid place-items-center">
        <h1 className="font-bold lg:text-6xl text-4xl text-white">{strCategory} Category</h1>
      </div>
    </div>
  );
};

export default CategoryJumbotron;
