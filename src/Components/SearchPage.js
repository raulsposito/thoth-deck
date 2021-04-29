import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CardList from './CardList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [cardListDefault, setCardListDefault] = useState();
  const [cardList, setCardList] = useState();

  const fetchData = async () => {
    return await fetch('https://thoth-deck-backend.herokuapp.com/api/v1/card')
      .then(response => response.json())
      .then(data => {
         setCardList(data) 
         setCardListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = cardListDefault.filter(card => {
      return card.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setCardList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Card List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <CardList cardList={cardList}/>
    </>
   );
}

export default SearchPage