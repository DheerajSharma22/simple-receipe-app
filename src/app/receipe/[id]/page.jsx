import Image from "next/image";
import React from "react";

const getReceipeDetails = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await res.json();

    if (data) return data;
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }) => {
  const receipeDetails = await getReceipeDetails(params.id);

  return (
    <div className="w-screen min-h-screen">
      <div className="w-10/12 mx-auto mt-10">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div className="w-full">
            <Image
              src={receipeDetails?.image}
              width={500}
              height={500}
              alt={receipeDetails?.name}
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">{receipeDetails?.name}</h2>
            <p className="text-md text-gray-700"><span className="font-semibold">Meal Type: </span>{receipeDetails?.mealType[0]}</p>
            <p className="text-md text-gray-700"><span className="font-semibold">Cuisine: </span>{receipeDetails?.cuisine}</p>
            <p className="text-md text-gray-700"><span className="font-semibold">Ratings: </span>{receipeDetails?.rating}</p>
            <p className="text-md text-gray-700"><span className="font-semibold">Calories Per Serving: </span>{receipeDetails?.caloriesPerServing}</p>
            <div>
              <p className="font-semibold text-xl mb-5">Ingredients</p>
              <div className="flex items-center gap-5 flex-wrap">
                {receipeDetails?.ingredients.length > 0 &&
                  receipeDetails?.ingredients.map((ingredient, index) => (
                    <span
                      className="bg-red-50 px-6 py-2 rounded-md"
                      key={index}
                    >
                      {ingredient}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
