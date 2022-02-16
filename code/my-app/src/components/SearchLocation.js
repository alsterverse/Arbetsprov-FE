import React from 'react';
import styled from 'styled-components';
import plusIcon from '../assets/plusIcon.png';

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 6px;
  width: 90vw;
  max-width: 450px;
  div {
    padding-left: 15px;
    p {
      font-size: 20px;
      font-weight: 500;
      margin-top: 18px;
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

const SearchButton = styled.button`
  background-color: #fff;
  border: none;
  padding-right: 20px;
  border-radius: 6px;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
    padding: 0;
  }
`;

const SearchLocation = ({ onFormSubmit, searchValue, setSearchValue }) => {
  return (
    <StyledForm onSubmit={onFormSubmit}>
      <div>
        <p>Plats:</p>
      </div>
      <SearchBar
        placeholder='Stockholm'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <SearchButton type='submit'>
        <img src={plusIcon} alt='plus-icon' />
      </SearchButton>
    </StyledForm>
  );
};

export default SearchLocation;
