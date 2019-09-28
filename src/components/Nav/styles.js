import styled from 'styled-components';

const NavWrap = styled.nav`
  background-color: transparent;
  & li {
    margin: 0 1rem;
  }
  & a {
    color: rgba(255, 255, 255, 1);
  }
  & a:hover,
  a:focus,
  a.active {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export default NavWrap;
