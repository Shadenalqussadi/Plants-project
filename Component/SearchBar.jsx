import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import "../Component/SearchBar.css"

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch('https://perenual.com/api/species-list?key=sk-60Cl66b80b112f8cb6464&num=10')
      .then((response) => response.json())
      .then((json) => {
        // تحقق من أن البيانات عبارة عن مصفوفة
        if (Array.isArray(json.data)) {
          const results = json.data.filter((item) => {
            return value
              && item
              && item.common_name
              && item.common_name.toLowerCase().includes(value.toLowerCase());
          });
          setResults(results); // تمرير النتائج المصححة للمكون الأب
        } else {
          console.error('البيانات المسترجعة ليست مصفوفة:', json);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className='input-wrapper'>
      <FaSearch id="search-icon" />
      <input
        placeholder='Type to search....'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
