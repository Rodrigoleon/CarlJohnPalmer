import React from 'react';

import HeroWrap from './styles';

const Hero = ({ title, subtitle, imageUrl, minHeight }) => (
  <HeroWrap image={imageUrl} minHeight={minHeight}>
    <div>
      <h1>{title}</h1>
      <hr />
      <p>{subtitle}</p>
    </div>
  </HeroWrap>
);

export default Hero;
