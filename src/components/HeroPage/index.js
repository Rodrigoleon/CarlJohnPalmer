import React from 'react';

import HeroPageWrap from './styles';

const HeroPage = ({ title, subtitle, imageUrl }) => (
  <HeroPageWrap image={imageUrl}>
    <div>
      <h1>{title}</h1>
      <hr />
      <p>{subtitle}</p>
    </div>
  </HeroPageWrap>
);

export default HeroPage;
