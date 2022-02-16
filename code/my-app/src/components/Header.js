import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  height: 300px;
  width: 100vw;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 40px;
    font-weight: 600;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Hur är vädret i...</h1>
    </HeaderContainer>
  );
};

export default Header;
