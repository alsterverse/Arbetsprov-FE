import styled from 'styled-components';

export const SearchButton = styled.button`
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

export const ButtonContainer = styled.div`
  display: flex;
  height: inherit;
`;

export const DeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border: 0;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: #eee;
  cursor: pointer;
  img {
    height: 14px;
    width: 14px;
  }
`;

export const DeleteAllButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #fff;
  border-radius: 18px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin: 5px;
`;
