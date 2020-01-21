import styled from 'styled-components';
import fogOne from '../../media/images/fog-1.png';
import fogTwo from '../../media/images/fog-2.png';

const HeroHomeWrap = styled.div`
  min-height: 100vh;
  @media (min-width: 768px) {
    min-height: 50vh;
    ${props => (props.minHeight ? `min-height: ${props.minHeight}` : ``)};
  }
  padding: 10rem 0;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center; /* For Safari */
  color: white;
  background-image: linear-gradient(to right, #4f197f, #19647f);
  @media (min-width: 768px) {
    ${props =>
      props.image
        ? `background-image: url(${props.image}), linear-gradient(
    to right,
    #4F197F,
    #19647F
  );`
        : ``};
  }
  background-size: auto 102%;
  background-repeat: no-repeat;
  background-position: center top;
  & h1 {
    @media (min-width: 768px) {
      font-size: 4.2rem;
    }
    text-align: center;
    margin-bottom: 0;
    ${props =>
      props.theme.primaryFont
        ? `font-family: ${props.theme.primaryFont}`
        : `arial`};
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.4rem;
  }
  & .container {
    position: relative;
  }
  & hr {
    border-color: rgba(255, 255, 255, 0.2);
  }
  & .hero-float-bottom {
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'Left Right';
  }
  & .fog__container {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    top: 0;
    left: 0;
    opacity: 0.6;
  }
  & .fog__img {
    position: absolute;
    height: 100%;
    width: 300vw;
  }
  & .fog__img--first {
    background: url(${fogOne}) repeat-x;
    background-size: contain;
    background-position: center;
    -webkit-animation: marquee 400s linear infinite;
    animation: marquee 400s linear infinite;
  }
  & .fog__img--second {
    background: url(${fogTwo}) repeat-x;
    background-size: contain;
    background-position: center;
    -webkit-animation: marquee 200s linear infinite;
    animation: marquee 200s linear infinite;
  }

  @-webkit-keyframes marquee {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-200vw, 0, 0);
      transform: translate3d(-200vw, 0, 0);
    }
  }

  @keyframes marquee {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-200vw, 0, 0);
      transform: translate3d(-200vw, 0, 0);
    }
  }
`;

// #5c258d, #4389a2

export default HeroHomeWrap;
