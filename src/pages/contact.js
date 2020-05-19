import React, { useState } from 'react'
import axios from 'axios';
import Layout from '../components/layout';
import contactStyles from './styles/contact.module.scss'
import SEO from '../components/seo'

const Contact = (props) => {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [company, setCompanyName] = useState('')
  const [position, setPosition] = useState('')
  const [submitMsg, setSubmitMsg] = useState('')

  const handleSubmit = e => {
    e.preventDefault();

    setSubmitMsg('');
    
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    

    if( regex.test(String(email).toLowerCase()) && name.length > 2 && description.length > 5){
      axios.post('http://localhost:5000/emails/contact', { description, name, email, company, position })
        .then(res => {
          if(res.status === 201){
            setName('')
            setEmail('')
            setDescription('')
            setCompanyName('')
            setPosition('');
            setSubmitMsg('Form submitted successfully')
          }
          else if(res.status === 400){
            setSubmitMsg('Kindly make sure you entered the description, your name, and email correctly')
          }
          else{
            setSubmitMsg('Something went wrong. Kindly try again later')
          }
        })
        .catch(e => {
          setSubmitMsg('Kindly make sure you entered the description, your name, and email correctly')
        })
    }
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <section className={contactStyles.contact}>
        <h3 className="section-title">Contact</h3>
        <form onSubmit={handleSubmit}>
          
          <label htmlFor="project-desc">Project brief description</label>
          <textarea 
            value={description}
            id="project-desc" 
            className={contactStyles.description} 
            rows="6"
            placeholder="Project Type, Target customer, timeline, estimate etc"
            onChange={e => setDescription(e.target.value)}
            required
            ></textarea>
          
          <label htmlFor="about_you">About You</label>
          <input 
            value={name}
            type="text" 
            id="about_you" 
            placeholder="Full Name" 
            onChange={e => setName(e.target.value)}
            required
          />
          <input 
            value={email}
            type="email" 
            placeholder="Email Address" 
            onChange={e => setEmail(e.target.value)} 
            required
          />
          <input 
            value={company}
            type="text" 
            placeholder="Company Name" 
            onChange={e => setCompanyName(e.target.value)}
          />
          <input 
            value={position}
            type="text" 
            placeholder="Position" 
            onChange={e => setPosition(e.target.value)}
          />

          <input type="submit" className={contactStyles.submit + " button colored"} value="Request a quote"/>
        </form>
        <p className={`${contactStyles.msg} + ${submitMsg ? '' : " hidden"} `}>{submitMsg}</p>

      </section>
    </Layout>
  )
}


export default Contact;