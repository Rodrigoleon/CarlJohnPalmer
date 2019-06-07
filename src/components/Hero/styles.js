import styled from 'styled-components';

const HeroWrap = styled.div`
  background-color: rebeccapurple;
  min-height: 50vh;
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
  & div {
    width: 68%;
  }
`;

export default HeroWrap;
