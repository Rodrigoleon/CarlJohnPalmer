import React from 'react';

import {
  FaFacebookF,
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaAnchor,
} from 'react-icons/fa';

// Styles
import SocialWrap from './styles';

const Player = () => (
  <SocialWrap>
    <a href="#test" target="_blank" rel="noopener noreferrer">
      <FaYoutube />
    </a>
    <a href="#test" target="_blank" rel="noopener noreferrer">
      <FaAnchor />
    </a>
    <a href="#test" target="_blank" rel="noopener noreferrer">
      <FaSpotify />
    </a>
    <a href="#test" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="#test" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
  </SocialWrap>
);

export default Player;
