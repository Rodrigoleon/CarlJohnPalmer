import React from 'react';
import { Link } from 'gatsby';

import NavWrap from './styles';

const Nav = () => (
  <NavWrap className="d-flex justify-content-end align-items-center">
    <ul className="list-unstyled d-flex m-0 p-0 align-items-center">
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

export default Nav;
