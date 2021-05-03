import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <div className="header">
            <h1>Welcome to Thoth Card Deck!</h1>
            <SearchBar />
        </div>
    )
}

export default Header;