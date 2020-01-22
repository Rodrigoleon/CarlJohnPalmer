import styled from 'styled-components';

const NavWrap = styled.nav`
  & svg {
    fill: #fff;
    height: 3rem;
    width: 3rem;
  }
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
  & button {
    background: transparent;
    border: 0;
    position: relative;
    z-index: 10;
  }
  & .menu-hidden-false {
    visibility: hidden;
  }
  @media (max-width: 768px) {
    ul {
      flex-flow: column;
      @media (max-width: 768px) {
        ${props =>
          props.theme.primaryColor
            ? `background: ${props.theme.primaryGradient}`
            : `#fff`};
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        justify-content: center;
        padding: 2rem;
        overflow: scroll;
      }
    }
    & li {
      margin: 1rem;
    }
    & a {
      font-size: 1.2rem;
    }
  }
`;

export default NavWrap;
