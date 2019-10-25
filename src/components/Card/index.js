import React from 'react';
import { Link } from 'gatsby';

import FeaturedImage from '../FeaturedImage';
import CardWrap from './styles';

const Card = ({ node }) => (
  <CardWrap>
    <header>
      <h2>{node.title}</h2>
    </header>
    <footer />
    <FeaturedImage meta={node.featured_media} />
    <Link to={`/${node.type}/${node.slug}`} />
  </CardWrap>
);

export default Card;
