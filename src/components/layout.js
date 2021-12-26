/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'


import './styles/reset.css'
import layoutStyles from "./styles/layout.module.scss"

const Layout = ({ children, title }) => {
  const data = useStaticQuery( graphql`
    query {
      bg: file(relativePath: { eq: "glassy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className={layoutStyles.layout}>
      <BackgroundImage
        Tag="div"
        className={layoutStyles.bg}
        fluid={data.bg.childImageSharp.fluid}
        backgroundColor={`#19182F`}
      >
        <Header siteTitle={"title"} />
        <div className={layoutStyles.content}>
          <main>{children}</main>
          <Footer title={title}/>
        </div>
      </BackgroundImage>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
