import Image from "next/image";
import SearchInput from "./components/searchInput";

async function getMeals(search = "") {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
    {
      cache: "force-cache",
    }
  );
  const data = await res.json();
  return data.meals || [];
}

export default async function Meals({ searchParams }) {
  const search = searchParams?.query || "";
  const meals = await getMeals(search);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-12">Meals {search}</h1>
      <div className="my-12 md:w-6/12 mx-auto">
        <SearchInput />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="mb-6 p-4 shadow-md">
              <img
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
                width={640}
                height={440}
              />
              <h2 className="text-xl font-bold">{meal?.strMeal}</h2>
              <p className="text-gray-600">Origin: {meal.strArea}</p>
              <p>
                {meal.strInstructions?.split(" ").slice(0, 50).join(" ")}...
              </p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No meals found. Try a different search term.
          </p>
        )}
      </div>
    </div>
  );
}
