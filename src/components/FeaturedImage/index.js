import React from 'react';

import FeaturedImageWrap from './styles';

const FeaturedImage = ({ meta }) => (
  <FeaturedImageWrap>
    <source
      srcSet={meta.localFile.childImageSharp.fluid.srcSetWebp}
      type="image/webp"
    />
    <source
      srcSet={meta.localFile.childImageSharp.fluid.srcSet}
      type="image/jpeg"
    />
    <img src={meta.localFile.childImageSharp.fluid.src} alt={meta.alt_text} />
  </FeaturedImageWrap>
);

export default FeaturedImage;
