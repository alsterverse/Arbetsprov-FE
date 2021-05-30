import './Searchbar.css';
import React from 'react';

const Searchbar = ({weatherData, search, setSearch, getData, createItem }) => {

  const isEnabled = weatherData >= 0;

    return(
      <div className="Searchbar">
        <h1>Hur är vädret i...</h1>
        <form onSubmit={getData}>
          <div id="InputContainer">Plats:</div>
            <input 
            autoFocus 
            name="city"
            id="searchInput" 
            spellCheck="false"
            value={search} 
            onChange={e => setSearch(e.target.value)}
            onKeyPress={e => e.key === 'Enter'|| e.keyCode ==='13' ? getData : null} />
            <button 
            disabled={isEnabled}  
            onClick={createItem} 
            type="button" 
            className={`SaveSearch ${(isEnabled) ? 'disabled' : '' }`} />
        </form>
      </div>
  );
};

export default Searchbar;