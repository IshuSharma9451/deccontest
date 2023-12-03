// SearchBar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWordDetails, addToHistory } from '../redux/store'
import "../App.css"


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
      const data = await response.json();
      dispatch(setWordDetails(data[0]));
      dispatch(addToHistory(searchTerm));
    } catch (error) {
      console.error('Error fetching word details:', error);
    }
  };

  return (
    <div>
      <input type="text" className='search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
