// SearchHistory.js
import React from 'react';
import { useSelector } from 'react-redux';

const SearchHistory = () => {
  const searchHistory = useSelector((state) => state.searchHistory);

  return (
    <div>
      <h3>Search History</h3>
      <ul>
        {searchHistory.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
