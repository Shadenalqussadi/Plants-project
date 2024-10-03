import React from "react";

function SectionPlants({ plant }) {
  return (
    <div className="bg-slate-100 shadow-md rounded-lg p-6 m-4 max-w-xl transition-transform transform hover:scale-105">
      <img className="rounded  mx-auto" src={plant.default_image?.small_url} alt={plant.common_name} />
      <h2 className="text-xl font-semibold text-center mt-4">{plant.common_name}</h2>
      <p className="text-center text-gray-600 mt-2">{plant.scientific_name.join(", ")}</p>
      <p className="text-center text-gray-600 mt-2">{plant.family}</p>
    </div>
  );
}

export default SectionPlants;
