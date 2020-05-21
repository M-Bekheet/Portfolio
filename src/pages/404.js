import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import notFoundStyles from './styles/notFound.module.scss'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className={notFoundStyles.notFound}>
      <h1>NOT FOUND</h1>
      <p>It seems your searching for Neverland? Umm I have a better place. Visit me at&nbsp;
         <Link to="/">Home</Link>
      </p>
    </section>
  </Layout>
)

export default NotFoundPage
