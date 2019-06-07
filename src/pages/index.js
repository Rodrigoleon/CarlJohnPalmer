import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout home>
    <SEO title="Home" />
    <Hero
      title="Carl John Palmer"
      subtitle="Welcome to your new Gatsby site."
      minHeight="100vh"
    />
  </Layout>
);

export default IndexPage;
