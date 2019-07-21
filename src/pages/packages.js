import React from "react"
import styled from "styled-components";
import Layout from "../components/layout"
import SEO from "../components/seo"

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Repo = styled.a`
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.2em;
  text-decoration: none;
  color: black;
  width: 250px;
  margin: 0.3em;
  
  &:hover {
    background-color: silver;
  }
`;

const Packages = () => (
  <Layout>
    <SEO title="Packages" />
    <h2>Packages maintained by Meteor Community Packages organization</h2>
    <Flex>
      <Repo href="https://github.com/Meteor-Community-Packages/meteor-link-accounts">
        <h4>Meteor link accounts</h4>
        <p>Link multiple third-party logins to one account.</p>
      </Repo>
      <Repo href="https://github.com/Meteor-Community-Packages/stratosphere">
        <h4>Stratosphere</h4>
        <p>Meteor private package server</p>
      </Repo>
      <Repo href="https://github.com/Meteor-Community-Packages/meteor-scss">
        <h4>Meteor scss</h4>
        <p>Node-sass wrapped to work with meteor. </p>
      </Repo>
      <Repo href="https://github.com/Meteor-Community-Packages/react-router-ssr">
        <h4>React Router SSR</h4>
        <p>Simple Isomorphic SSR for Meteor </p>
      </Repo>
      <Repo href="https://github.com/Meteor-Community-Packages/meteor-method-hooks">
        <h4>Meteor Method Hooks</h4>
        <p>Before/after hooks for Meteor methods</p>
      </Repo>
    </Flex>
  </Layout>
)

export default Packages
