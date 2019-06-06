import React from 'react';

import Layout from '../components/Layout';
import HeroHome from '../components/HeroHome';
import Image from '../components/Image';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout home>
    <SEO title="Home" />
    <HeroHome />
    <div className="system-output">
      <div style={{ maxWidth: `300px` }}>
        <Image />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
