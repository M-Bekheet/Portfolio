import React from "react"
import { Link } from "gatsby"

import './styles/reset.css';
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { About } from '../components/about'
import { Work } from '../components/work'
import { Testimonials } from '../components/testimonials'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About/>
    <Work/>
    <Testimonials/>
  </Layout>
)

export default IndexPage
