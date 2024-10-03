import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div>
      {results && results.length > 0 ? (
        results.map((result, index) => (
          <div key={index}>
            <h4>{result.common_name}</h4>
            <p>{result.scientific_name}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
