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

import './styles/reset.css'
import layoutStyles from "./styles/layout.module.scss"

const Layout = ({ children, title }) => {
  console.log(title)
  return (
    <div className={layoutStyles.layout}>
      <Header siteTitle={"title"} />
      <div className={layoutStyles.content}>
        <main>{children}</main>
        <Footer title={title}/>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
