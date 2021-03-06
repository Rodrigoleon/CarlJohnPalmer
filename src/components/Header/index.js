import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import HeaderWrap from './styles';
import Nav from '../Nav';
import LogoSVG from '../../media/svg/logo';

const Header = ({ siteTitle }) => (
  <HeaderWrap className="container">
    <div>
      <Link to="/">
        <LogoSVG width={50} fill="#fff"></LogoSVG>
      </Link>
    </div>
    <Nav />
  </HeaderWrap>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

// <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="50"
//           viewBox="0 0 282.11 415.101"
//         >
//           <g transform="translate(-353.591 -136.93)">
//             <path
//               d="M126.383,271.866c-105.986.364-104.471-57.31-104.471-57.31a171.425,171.425,0,0,1-7.384-41.73c-.976-22.5-17.6-47.487-14.027-64.991S14.155,71.471,14.529,55.748,11.234,2.971,11.234,2.971c5.657-6.684,11.1,0,11.1,0C26.851,71.6,54.351,72.4,54.351,72.4,77.86,37.912,121.86,39.032,126.383,39.243c4.523-.211,48.522-1.331,72.032,33.155,0,0,27.5-.8,32.019-69.427,0,0,5.441-6.684,11.1,0,0,0-3.668,37.054-3.295,52.777s10.459,34.584,14.026,52.088-13.051,42.488-14.026,64.991a171.476,171.476,0,0,1-7.384,41.73s1.507,57.308-103.463,57.312ZM173.007,92.818l-2.337-4.547-33.032-2.078s-9.243-.27-11.255-4.769c-2.012,4.5-11.255,4.769-11.255,4.769L82.1,88.271l-2.338,4.547A51.385,51.385,0,0,0,126.005,108v-.163s.13.033.378.086c.248-.053.378-.086.378-.086V108A51.383,51.383,0,0,0,173.007,92.818Z"
//               transform="translate(371.548 280.162)"
//               fill="#fff"
//             />
//             <ellipse
//               cx="136.537"
//               cy="24.976"
//               rx="136.537"
//               ry="24.976"
//               transform="translate(362.626 136.93)"
//               fill="#fff"
//             />
//             <path
//               d="M136.767-2.625C212.3-4.075,273.319,8.389,273.053,25.215S211.341,56.856,135.806,58.305-.745,47.291-.48,30.465,61.233-1.175,136.767-2.625Z"
//               transform="matrix(0.996, -0.087, 0.087, 0.996, 354.309, 174.176)"
//               fill="#fff"
//             />
//             <path
//               d="M90,41H0V0H95.846L90,41ZM8.845,8V33h73V8Z"
//               transform="translate(507.155 248)"
//               fill="#fff"
//             />
//             <path
//               d="M95.846,41h-90L0,0H95.846V41Zm-82-33V33h73V8Z"
//               transform="translate(398.155 248)"
//               fill="#fff"
//             />
//             <rect
//               width="16"
//               height="11"
//               transform="translate(388 248)"
//               fill="#fff"
//             />
//             <rect
//               width="16"
//               height="11"
//               transform="translate(595 248)"
//               fill="#fff"
//             />
//             <circle
//               cx="13"
//               cy="13"
//               r="13"
//               transform="translate(509 248)"
//               fill="#fff"
//             />
//             <circle
//               cx="13"
//               cy="13"
//               r="13"
//               transform="translate(401 248)"
//               fill="#fff"
//             />
//           </g>
//         </svg>
