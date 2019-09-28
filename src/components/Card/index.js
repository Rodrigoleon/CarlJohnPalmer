import React from 'react';
import { Link } from 'gatsby';

import CardWrap from './styles';

const Card = ({ node }) => (
  <CardWrap img={node.featured_img_url}>
    <header>
      <h2>{node.title}</h2>
    </header>
    <footer />
    <Link to={`/${node.type}/${node.slug}`} />
  </CardWrap>
);

export default Card;
