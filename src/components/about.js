import React from 'react'
import { Link } from 'gatsby'

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
        <p className={aboutStyles.jobDescription}>Currently building web applications in React / JavaScript</p>
        <Link to="/contact" className={aboutStyles.hireMe + " button colored"}>
          Hire me
        </Link>
        <Link to="/#testimonials" className={aboutStyles.knowMore + " button"}>
          Know more
        </Link>
        <blockquote className={aboutStyles.quote}>Knowledge is power</blockquote>
      </div>
    </section>
  )
}
