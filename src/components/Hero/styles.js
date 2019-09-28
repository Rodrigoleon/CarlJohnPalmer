import styled from 'styled-components';
import fogOne from '../../media/images/fog-1.png';

const HeroWrap = styled.div`
  ${props =>
    props.theme.primaryColor
      ? `background: url(${fogOne}), ${props.theme.primaryGradient}`
      : `#222`};
  min-height: 400px;
  clip-path: polygon(0 0, 100% 0%, 100% 68%, 0% 100%);
  ${props => (props.minHeight ? `min-height: ${props.minHeight}` : ``)};
  padding: 4.6rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  text-align: center;
  color: white;
  ${props => (props.image ? `background-image: url(${props.image})` : ``)};
  & h1 {
    font-size: 3rem;
    margin-bottom: 0;
    ${props =>
      props.theme.primaryFont
        ? `font-family: ${props.theme.primaryFont}`
        : `arial`};
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.4rem;
  }
`;

export default HeroWrap;
