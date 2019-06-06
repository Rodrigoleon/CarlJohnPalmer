import React from 'react';

import Layout from '../components/Layout';
import HeroPage from '../components/HeroPage';
import SEO from '../components/SEO';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <HeroPage
      title="Page Two!!!"
      subtitle="Subtitles are here to stay!"
      imageUrl="https://picsum.photos/id/190/1920/1080"
    />
    <div className="system-output">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </div>
  </Layout>
);

export default SecondPage;
