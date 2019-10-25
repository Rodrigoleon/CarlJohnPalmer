import styled from 'styled-components';

// Footer Styles

const FeaturedImageWrap = styled.picture`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  & img {
    object-fit: cover;
    width: 100%;
  }
`;

export default FeaturedImageWrap;
