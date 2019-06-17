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
      imageUrl="https://picsum.photos/id/190/1920/1080"
    />
    <div className="system-output container">
      <h1>Hi From This Page</h1>
      <p>This was Page Two</p>
      <div style={{ maxWidth: `300px` }}>
        <Image src="gatsby-astronaut.png" />
      </div>
    </div>
  </Layout>
);

export default IndexPage;

// Calling a singular page:
// {
//   wordpressPost(slug: {eq: "hello-world"}) {
//     title
//     content
//     template
//     wordpress_id
//     slug
//     author
//     excerpt
//   }
// }
// http://localhost:8000/___graphql
// https://codepen.io/thomasvaeth/pen/EevQPV
