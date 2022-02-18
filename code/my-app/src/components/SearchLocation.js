import React from 'react';
import styled from 'styled-components';
import plusIcon from '../assets/plus.svg';
import { SearchButton } from './StyledButtons';

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 6px;
  width: 90vw;
  max-width: 450px;
  margin-bottom: 20px;
  div {
    padding-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    label {
      font-size: 20px;
      font-weight: 500;
    }
  }
`;

const SearchBar = styled.input`
  height: 60px;
  width: 100%;
  font-size: 20px;
  background-size: 20px;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 20px;
  border: none;
  box-shadow: none;
  -webkit-appearance: none;
`;

const SearchLocation = ({ onFormSubmit, searchValue, setSearchValue }) => {
  return (
    <StyledForm onSubmit={onFormSubmit}>
      <div>
        <label htmlFor='searchbar'>Plats:</label>
      </div>
      <SearchBar
        id='searchbar'
        type='text'
        placeholder='Stockholm'
        required
        value={searchValue}
        autoComplete='off'
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <SearchButton type='submit'>
        <img src={plusIcon} alt='plus-icon' />
      </SearchButton>
    </StyledForm>
  );
};

export default SearchLocation;
