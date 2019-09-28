import styled from 'styled-components';

// Footer Styles

const CardWrap = styled.div`
  position: relative;
  padding: 2rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-size: 1.4rem;
  min-height: 400px;
  ${props => (props.image ? `background-image: url(${props.image})` : ``)};
  & a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default CardWrap;
