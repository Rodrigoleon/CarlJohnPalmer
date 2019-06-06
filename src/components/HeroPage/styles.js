import styled from 'styled-components';

const HeroPageWrap = styled.div`
  background-color: rebeccapurple;
  min-height: 50vh;
  padding: 4.6rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  color: white;
  text-align: center;
  ${props => (props.image ? `background-image: url(${props.image})` : ``)};
  & div {
    width: 68%;
  }
`;

export default HeroPageWrap;
