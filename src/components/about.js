import React from 'react'
import aboutStyles from './styles/about.module.scss'

export const About = ({ title, description }) => {

  return (
    <section id="about" className={aboutStyles.about}>
      <h3 className="section-title">About</h3>
      <div className={aboutStyles.info}>
        <div className={aboutStyles.name}>
          {title}
          <span className="colored">.</span>
        </div>
        <p className={aboutStyles.description + " colored"}>{description}</p>
        <p className={aboutStyles.jobDescription}>currently building web application in React / JavaScript</p>
        <button className={aboutStyles.hireMe + " button colored"}>Hire me</button>
        <button className={aboutStyles.knowMore + " button"}>Know more</button>
        <blockquote>Knowledge is power</blockquote>
      </div>
    </section>
  )
}
