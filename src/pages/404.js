import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Hero title="404" subtitle="You lost, man?" />
    <div className="system-output container">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
