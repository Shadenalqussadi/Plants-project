import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SectionPlants from './SectionPlants';

function PlantsList() {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlants() {
      try {
        const response = await axios.get('https://perenual.com/api/species-list?key=sk-60Cl66b80b112f8cb6464&num=10');
        if (response.data && Array.isArray(response.data.data)) {
          setPlants(response.data.data);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (error) {
        setError("Error fetching plants: " + error.message);
      }
    }

    fetchPlants();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex justify-start items-start mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 lg:max-w-screen-lg">
        {plants.map((plant, index) => (
          <div key={index} className="w-full p-2">
            <SectionPlants plant={plant} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantsList;
