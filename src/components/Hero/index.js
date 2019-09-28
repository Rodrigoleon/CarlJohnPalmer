import React from 'react';

import HeroWrap from './styles';

const Excerpt = ({ subtitle }) => {
  if (subtitle) {
    return (
      <>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: subtitle }} />
      </>
    );
  } else {
    return ``;
  }
};

const Hero = ({ title, subtitle, imageUrl, minHeight }) => (
  <HeroWrap image={imageUrl} minHeight={minHeight}>
    <div className="container">
      <h1>{title}</h1>
      <Excerpt subtitle={subtitle} />
    </div>
  </HeroWrap>
);

export default Hero;
