import React from "react"

import './styles/reset.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { About } from '../components/about'
import { Work } from '../components/work'
import { Testimonials } from '../components/testimonials'
import { useStaticQuery, graphql } from 'gatsby' 

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description
        }
      }
    }
  `)

  let {title, description} = data.site.siteMetadata;

  return(
    <Layout title={title}>
      <SEO title="Home" />
      <About title={title} description={description} />
      <Work/>
      <Testimonials/>
    </Layout>
  )
}

export default IndexPage
