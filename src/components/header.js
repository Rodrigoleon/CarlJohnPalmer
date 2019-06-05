import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrap = styled.header`
  background: rebeccapurple;
  margin-bottom: 2rem;
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  & h1 a {
    color: white;
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrap>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </HeaderWrap>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
