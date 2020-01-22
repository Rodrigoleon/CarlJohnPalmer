import React from 'react';
import { MdMenu } from 'react-icons/md';

// Try passing the props here to make a better, simpler component.

const HamburgerMenu = () => {
  return (
    <button className="hamburger-menu">
      <MdMenu></MdMenu>
    </button>
  );
};

export default HamburgerMenu;
