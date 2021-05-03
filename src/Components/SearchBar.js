import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  
  const BarStyling = {width:"20rem", background:"#F2F1F9", border:"none", borderRadius:"5rem", padding:"0.5rem"};

  return (
    <input 
     style={BarStyling}
     key="random1"
     value={searchQuery}
     placeholder={"Search Card"}
     onChange={e => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchBar