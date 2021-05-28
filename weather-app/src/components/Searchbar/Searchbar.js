import './Searchbar.css';
import React from 'react';

const Searchbar = ({search, setSearch, getData, createItem }) => {

return(
    <div className="Searchbar">
      <h1>Hur är vädret i...</h1>
      <form id="InputContainer" onSubmit={getData}>
        <input 
        autoFocus 
        placeholder="Plats:" 
        name="city"
        id="searchInput" 
        spellCheck="false"
        value={search} 
        onChange={e => setSearch(e.target.value)}
        onKeyPress={e => e.key === 'Enter'|| e.keyCode ==='13' ? getData : null} />
        <button type="button" id="SaveSearch" onClick={createItem}>+</button>
      </form>
    </div>
  );
};

export default Searchbar;
