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
  min-height: 420px;
  padding-top: 20px;
  ${props =>
    props.img
      ? `background-image: url(${props.img});
        background-size: cover;
        background-position:center;
        color: #ffffff;`
      : ``};
  & a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  & header {
    position: relative;
    z-index: 1;
  }
`;

export default CardWrap;
