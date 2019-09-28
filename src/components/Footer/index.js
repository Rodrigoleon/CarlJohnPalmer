import React from 'react';

// Styles
import FooterWrap from './styles';

const Footer = () => (
  <FooterWrap className="text-center">
    <div>
      CJP © {new Date().getFullYear()}, Developed by{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://HTRDesign.net">
        HTR Design
      </a>
    </div>
  </FooterWrap>
);

export default Footer;
