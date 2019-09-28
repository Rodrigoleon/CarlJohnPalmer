import React from 'react';

import Layout from '../components/Layout';
import HeroHome from '../components/HeroHome';
import SEO from '../components/SEO';
import imgsrc from '../media/images/homehero.png';

const IndexPage = () => (
  <Layout home>
    <SEO title="Home" />
    <HeroHome title="Carl John Palmer" minHeight="100vh" imageUrl={imgsrc} />
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

// <div className="system-output container">
//       <div style={{ maxWidth: `300px` }}>
//         <Image src="gatsby-astronaut.png" />
//       </div>
//     </div>
