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
  @media (max-width: 768px) {
    ul {
      background-color: white;
      /* display: none; */
      position: absolute;
    }
    & a {
      color: #999;
    }
  }
`;

export default NavWrap;
