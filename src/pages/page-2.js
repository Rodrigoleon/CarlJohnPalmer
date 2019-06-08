import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import Image from '../components/Image';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Hero
      title="Page Two!!!"
      subtitle="Subtitles are here to stay!"
      imageUrl="https://picsum.photos/id/190/1920/1080"
    />
    <div className="system-output container">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <div style={{ maxWidth: `300px` }}>
        <Image src="gatsby-icon.png" />
      </div>
    </div>
  </Layout>
);

export default SecondPage;
