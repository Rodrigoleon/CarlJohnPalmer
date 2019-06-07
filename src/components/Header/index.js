import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import HeaderWrap from './styles';
import Nav from '../Nav';

const Header = ({ siteTitle }) => (
  <HeaderWrap className="container py-4">
    <div>
      <Link to="/">{siteTitle}</Link>
    </div>
    <Nav />
  </HeaderWrap>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
