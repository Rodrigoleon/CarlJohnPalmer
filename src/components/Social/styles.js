import styled from 'styled-components';

// Footer Styles

const SocialWrap = styled.div`
  font-size: 0.8rem;
  color: #fff;
  & a {
    color: rgba(255, 255, 255, 0.6);
    margin-right: 1.4rem;
    font-size: 1rem;
  }
  & a:hover,
  a:focus {
    color: rgba(255, 255, 255, 1);
  }
`;

export default SocialWrap;
