import React from 'react';
import { Link } from 'gatsby';

import NavWrap from './styles';

const Nav = () => (
  <NavWrap>
    <ul className="list-unstyled d-flex m-0 p-0 justify-content-end">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/404">Page 2</Link>
      </li>
      <li>
        <Link to="/posts/hello-world">Hello World</Link>
      </li>
    </ul>
  </NavWrap>
);

export default Nav;
