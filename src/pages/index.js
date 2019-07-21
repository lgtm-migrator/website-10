import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Welcome to the temporary website</h2>
    <p>Welcome! This is just a temporary cross road and announcement page until we <a href="https://github.com/Meteor-Community-Packages/organization/issues/5" title="Discussion about this website">figure out</a> what we want this to become and how it should look.</p>
    <p>In the meantime you can check a list of the community <Link to="/projects">projects</Link> and <Link to="/packages">packages</Link>.</p>

    <h2>News</h2>
  </Layout>
)

export default IndexPage
