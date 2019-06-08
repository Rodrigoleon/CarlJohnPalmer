import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import Image from '../components/Image';

const IndexPage = () => (
  <Layout home>
    <SEO title="Home" />
    <Hero
      title="Carl John Palmer"
      subtitle="Welcome to your new Gatsby site."
      minHeight="100vh"
    />
    <div style={{ maxWidth: `300px` }}>
      <Image src="gatsby-astronaut.png" />
    </div>
  </Layout>
);

export default IndexPage;
