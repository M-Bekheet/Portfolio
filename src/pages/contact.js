import React, { useState } from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../components/layout';
import contactStyles from './styles/contact.module.scss'
import SEO from '../components/seo'


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Contact = (props) => {
  
  const [state, setState] = useState({})
  const [msg, setMsg] = useState('')

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {

      setMsg('');

      if(state.name.length < 3 || state.email.length < 6 || state.description.length < 10 ){
        setMsg('Kindly make sure you entered your Name, Email, and Job Description correctly.')
      }

      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
      .then(() => {
        setMsg('Thank you. Quote has been sent successfully. I will get in touch soon.')
        let newState = {}
        for(let key in state){
          newState[key] = ''          
        }
        setState(newState)
      })
      .catch((error) => {
        setMsg('Something went wrong with sending your quote information. Kindly try again later.')
      })

    e.preventDefault();

  }

  return (
    <Layout>
      <SEO title="Contact" />
      <section className={contactStyles.contact}>
        <h3 className="section-title">Contact</h3>

        <form 
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
          </p>

          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="project-desc">Project brief description</label>
          <textarea 
            name="description"
            value={state.description}
            id="project-desc" 
            className={contactStyles.description} 
            rows="6"
            placeholder="Project Type, Target customer, timeline, estimate etc"
            required
            onChange={handleChange} 
          />
          
          <label htmlFor="about_you">About You</label>
          <input 
            name="name"
            value={state.name}
            type="text" 
            id="about_you" 
            placeholder="Full Name" 
            onChange={handleChange}
            required
            />
          <input 
            name="email"
            value={state.email}
            type="email" 
            placeholder="Email Address" 
            onChange={handleChange} 
            required
            />
          <input 
            type="text"
            name="company" 
            value={state.company}
            placeholder="Company Name (optional)" 
            onChange={handleChange}
            />
          <input 
            type="text" 
            name="position"
            value={state.position}
            placeholder="Position (optional)" 
            onChange={handleChange}
          />

          <button 
            type="submit" 
            className={contactStyles.submit + " button colored"} 
          >
            Request a quote
          </button>
        </form>
        <p className={`${contactStyles.msg} + ${msg ? '' : " hidden"} `}>{msg}</p>

      </section>
    </Layout>
  )
}


export default Contact;