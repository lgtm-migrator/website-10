import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h2>Community projects</h2>
    <h3>Development projects</h3>
      <ul>
          <li><a href="https://github.com/Meteor-Community-Packages">Meteor Community Packages</a></li>
          <li><a href="https://github.com/meteortesting">Meteor Testing</a></li>
          <li><a href="https://github.com/meteor/blaze">Blaze</a></li>
      </ul>
    <h3>Non-development projects</h3>
    <h4>E-mail newsletter</h4>
      <script> var _ctct_m = "63e1ff839a591c2755665126fcf01bc0"; </script>
      <script id="signupScript" src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js" async defer></script>
      <div className="ctct-inline-form" data-form-id="6a5e41b7-0308-475a-9ee9-1efbddbe22fe"></div>
    <h4>Podcast</h4>
  </Layout>
)

export default Projects
