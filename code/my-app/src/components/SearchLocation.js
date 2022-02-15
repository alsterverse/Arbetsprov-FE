import React from 'react';

const SearchLocation = ({ onFormSubmit, searchValue, setSearchValue }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <input
        placeholder='Plats:'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button type='submit'>+</button>
    </form>
  );
};

export default SearchLocation;
