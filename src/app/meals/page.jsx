"use client";

import React, { useEffect, useState } from "react";

export async function getMeals(search) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  );
  return res.json();
}

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function fetchMeals() {
      const result = await getMeals(search);
      setMeals(result);
    }
    fetchMeals();
  }, [search]);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-12">Meals {search}</h1>
      <div className="my-12 md:w-6/12 mx-auto">
        <input
          value={search}
          type="text"
          placeholder="Search by menu"
          onChange={(e) => setSearch(e.target.value)}
          className="border text-center border-gray-700 w-full p-2 rounded-xl"
        />
      </div>
      <div className="grid grid-cols-3 gap-5">
        {meals?.meals?.map((meal) => (
          <div key={meal.idMeal} className="mb-6 p-4 shadow-md">
            <h2>id: {meal?.idMeal}</h2>
            <h2 className="text-3xl font-bold">{meal?.strMeal}</h2>
            <h2 className="text-lg font-bold">Origin: {meal?.strArea}</h2>
            <h2>
              {meal?.strInstructions?.split(" ").slice(0, 100).join(" ")}...
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
