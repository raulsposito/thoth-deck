import React from 'react';
import '../App.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  
  return (
    <input 
     className='search'
     value={searchQuery}
     placeholder={"Search Card"}
     onChange={e => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchBar