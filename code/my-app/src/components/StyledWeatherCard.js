import styled from 'styled-components';

export const WeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
  @media (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 850px;
  }
`;

export const StyledWeatherCard = styled.div`
  display: grid;
  grid-template-columns: 120px auto 50px;
  align-items: center;
  border-radius: 5px;
  width: 90vw;
  max-width: 450px;
  height: 110px;
  margin: 5px;
  &.mid-temperature {
    background-color: #fac710;
  }
  &.high-temperature {
    background-color: #f24726;
  }
  &.low-temperature {
    background-color: #2d9bf0;
  }
  &.default {
    background-color: #fff;
  }
  @media (min-width: 992px) {
    grid-template-columns: 110px auto 50px;
    width: 30%;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  height: inherit;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
  }
`;

export const WeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  h2 {
    font-size: 40px;
    margin: 0;
    color: #fff;
  }
  p {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    text-transform: uppercase;
    color: #fff;
  }
`;
