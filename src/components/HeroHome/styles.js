import styled, { css } from 'styled-components';

const HeroWrap = styled.div`
  background-color: rebeccapurple;
  min-height: 100vh;
  padding: 4.6rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  & div {
    width: 68%;
  }
  ${props =>
    props.textlight &&
    css`
      color: white;
    `}
  ${props =>
    props.textcenter &&
    css`
      text-align: center;
    `}
`;

export default HeroWrap;
