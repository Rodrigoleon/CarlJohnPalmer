import React from "react"
import styled from "styled-components"

const FooterWrap = styled.footer`
  background-color: #eee;
  padding: 4rem 2rem;
`

const Footer = ({ siteTitle }) => (
  <FooterWrap>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </FooterWrap>
)

export default Footer
