import styled, { css } from 'styled-components';

const HeaderWrap = styled.header`
  background-color: rebeccapurple;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 80%;
  padding: 1.45rem 1.0875rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'Left Right';
  & a {
    color: white;
    text-decoration: none;
  }
  ${props =>
    props.textlight &&
    css`
      color: white;
    `}
`;

export default HeaderWrap;
