import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
// import Image from "./image";

const Headr = styled.header`
  background: transparent;
  margin-bottom: 1.45rem;
  color: #0f0f0f;
  padding: 1.45rem 1.0875rem;
  
  & a {
    text-decoration: none;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.5rem;
`;

const Logo = styled(Link)`
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <Headr>
    <Logo to="/">
    </Logo>
    <h1 style={{ margin: 0, textAlign: "center" }}>
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </h1>
    <Navigation>
      <Link to="/packages">Packages</Link>
      <Link to="/projects">Projects</Link>
      <a href="https://github.com/Meteor-Community-Packages" title="Github organization">Github</a>
      <a href="https://forums.meteor.com" title="Official Meteor forums">Forums</a>
      <a href="https://docs.meteor.com" title="Official Meteor documentation">Documentation</a>
      <a href="https://guide.meteor.com" title="Official Meteor guide">Guide</a>
      <a href="https://www.meteor.com" title="Official Meteor website">Meteor</a>
    </Navigation>
  </Headr>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
