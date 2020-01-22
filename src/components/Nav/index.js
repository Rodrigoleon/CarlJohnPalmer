import React, { useState } from 'react';
import { Link } from 'gatsby';

import NavWrap from './styles';
import { MdMenu } from 'react-icons/md';

const Nav = () => {
  // Setting State in a Functional Component React 16 and up.
  // The initial value to the state is the first argument, aka: menuState.
  // the second argument is the function that will be used to update the states' value (as seen on menuToggle's function).
  const [menuState, setMenuState] = useState(false);

  // Functionality of the button. Note that some people use "function name()" for this and write it after the return statement since functions written in this way excecute first and const functions do not. It also keeps State, Logic and Design separate..ish.
  const menuToggle = () => {
    // Saying "!" with your boolean var is like saying, update it to whatever the opposite is. So "!menustate" will switch from true to false.
    setMenuState(!menuState);
    console.log(menuState);
  };

  return (
    <NavWrap className="d-flex justify-content-end align-items-center">
      <button className="hamburger-menu" onClick={menuToggle}>
        <MdMenu></MdMenu>
      </button>
      <ul
        className={`list-unstyled d-flex m-0 p-0 align-items-center menu-hidden-${menuState}`}
      >
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shows" activeClassName="active">
            Shows
          </Link>
        </li>
        <li>
          <Link to="/schedule" activeClassName="active">
            Schedule
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="active">
            Contact
          </Link>
        </li>
      </ul>
    </NavWrap>
  );
};

export default Nav;
