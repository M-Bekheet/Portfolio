import React from 'react'
import Layout from '../components/layout';
import contactStyles from './styles/contact.module.scss'
import { useStaticQuery, graphql} from 'gatsby'
import SEO from '../components/seo'

const Contact = (props) => {
  
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title,
  //         description
  //       }
  //     }
  //   }
  // `)
  console.log(props)
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <section className={contactStyles.contact}>
        <h3 className="section-title">Contact</h3>
        <form onSubmit={handleSubmit}>
          
          <label htmlFor="project-desc">Project brief description</label>
          <textarea 
            id="project-desc" 
            className={contactStyles.description} 
            rows="6"
            placeholder="Project Type, Target customer, timeline, estimate etc"
          ></textarea>
          
          <label htmlFor="about_you">About You</label>
          <input type="text" id="about_you" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Position" />

          <input type="submit" className={contactStyles.submit + " button colored"} value="Request a quote"/>
        </form>
      </section>
    </Layout>
  )
}


export default Contact;