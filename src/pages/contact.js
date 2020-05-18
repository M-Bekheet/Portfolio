import React from 'react'
import Layout from '../components/layout';
import contactStyles from './styles/contact.module.scss'

const Contact = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Layout>
      <section className={contactStyles.contact}>
        <h3 className="section-title">Contact</h3>
        <form onSubmit={handleSubmit}>
          
          <label htmlFor="project-desc">Project brief description</label>
          <textarea id="project-desc" className={contactStyles.description} rows="10"></textarea>
          
          <label htmlFor="about_you">About You</label>
          <input type="text" id="about_you" className={contactStyles.name} placeholder="Full Name" />
          <input type="email" className={contactStyles.email} placeholder="Email Address" />
          <input type="text" className={contactStyles.company} placeholder="Company Name" />
          <input type="text" className={contactStyles.position} placeholder="Position" />

          <input type="submit" className={contactStyles.submit + " button colored"} />
        </form>
      </section>
    </Layout>
  )
}


export default Contact;