import React from 'react';
import "./SearchResultsList.css";

export const SearchResultsList = ({ results, hasSearched }) => {
  return (
    <div className='results-list'>
      {results && results.length > 0 ? (
        results.map((result, id) => (
          <div key={id} className='result-item'>
            <h4>{result.common_name || "No common name"}</h4>
            <p><strong>Scientific Name: </strong>{result.scientific_name}</p>
            {result.default_image && (
              <img src={result.default_image.thumbnail} alt={result.common_name} />
            )}
          </div>
        ))
      ) : hasSearched ? (
        <p>No results found.</p>
      ) : null}
    </div>
  );
};
