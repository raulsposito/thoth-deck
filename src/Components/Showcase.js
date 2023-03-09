import React, { useState } from 'react';
import CardContainer from './CardContainer';
import data from './data'

const Showcase = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const editSearchTerm = (e) => {
    setSearchTerm(e.target.value )
  }
  
  const filteredCards = data.filter(d => d.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
      <input className="search" type='search' value={searchTerm} onChange={editSearchTerm} placeholder={"Search Card"}/>
      <br/>

      <h2>This is your search:</h2>
      <p>Hover to discover more</p>

      <CardContainer deck={filteredCards} />

    </div>
  )
}

export default Showcase;