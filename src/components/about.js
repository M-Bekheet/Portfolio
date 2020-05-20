import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';
import aboutStyles from './styles/about.module.scss'

export const About = ({ title, description }) => {
  const data = useStaticQuery(graphql`
  
  query {
      avatar: file(relativePath: { eq: "avatar2.png" }) {
        childImageSharp {
          fixed(width: 340){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section id="about" className={aboutStyles.about}>
      <div className={aboutStyles.info}>
        <h3 className="section-title">About</h3>
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
      <Img className={aboutStyles.avatar} fixed={data.avatar.childImageSharp.fixed} alt="Developer"/>
    </section>
  )
}
