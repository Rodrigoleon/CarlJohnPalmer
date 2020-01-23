import styled from 'styled-components';

const NavWrap = styled.nav`
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
    display: none;
  }
  & button:focus {
    outline: none;
  }
  & svg {
    fill: #fff;
    height: 3rem;
    width: 3rem;
  }
  @media (max-width: 768px) {
    ul {
      flex-flow: column;
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
    & .menu-hidden-false {
      visibility: hidden;
    }
    & li {
      margin: 1rem;
    }
    & a {
      font-size: 1.2rem;
    }
    button {
      display: block;
    }
  }
`;

export default NavWrap;
