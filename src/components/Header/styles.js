import styled from 'styled-components';

const HeaderWrap = styled.header`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'Left Right';
  & a {
    color: white;
    text-decoration: none;
  }
`;

export default HeaderWrap;
