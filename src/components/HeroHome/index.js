import React from 'react';

import HeroHomeWrap from './styles';
import Player from '../Player';
import Social from '../Social';

const HeroHome = ({ title, subtitle, imageUrl, minHeight }) => (
  <HeroHomeWrap image={imageUrl} minHeight={minHeight}>
    <div className="fog__container">
      <div className="fog__img fog__img--first" />
      <div className="fog__img fog__img--second" />
    </div>
    <Player />
    <div className="container hero-float-bottom">
      <Social />
    </div>
    <div className="container">
      <h1>{title}</h1>
      <hr />
      <p>{subtitle}</p>
    </div>
  </HeroHomeWrap>
);

export default HeroHome;
