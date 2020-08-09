/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import logo from '../images/logo.png'

import Header from "./header"
import "./layout.scss"
import "../style/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div className="footer-left">
            <p className="footer-title"> Orbit DevStudio</p>
            {/* <p> Freelance full-stack developer</p> */}
            <p> yes@orbitdevstudio.com</p>
          </div>
          <img src={logo} />
          <div className="footer-right">
            <p className="footer-title"> Hans Vertriest</p>
            {/* <p> BTW dsfsdfs</p> */}
            <p>Student New Media Development</p>
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
