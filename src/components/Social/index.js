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
    <a
      href="https://anchor.fm/cultscoffeeconvo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaAnchor />
    </a>
    <a
      href="https://open.spotify.com/show/4TED6Sd2hKXQGF5Xy3CWbk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaSpotify />
    </a>
    <a
      href="https://www.instagram.com/cultscoffeeconvo/?hl=en"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.facebook.com/cultscoffeeconversation/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookF />
    </a>
  </SocialWrap>
);

export default Player;
