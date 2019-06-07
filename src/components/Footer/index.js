import React from 'react';

// Styles
import FooterWrap from './styles';

const Footer = () => (
  <FooterWrap className="text-center">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </FooterWrap>
);

export default Footer;
