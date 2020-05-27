import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql} from "gatsby"
import Img from 'gatsby-image'
import headerStyles from './styles/header.module.scss';

const Header = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const trackActiveItem = () => {
      const work = document.querySelector('#work'),
            testimonials = document.querySelector('#testimonials'),
            scrollPosition = document.documentElement.scrollTop + 40 || document.body.scrollTop + 40,
            nav = document.querySelector(`.${headerStyles.nav}`);

      if(scrollPosition < work.offsetTop ){
        if (document.querySelector('.active-nav-link')) {
          document.querySelector('.active-nav-link').classList.remove('active-nav-link')
          nav.querySelector('a[href="/"').classList.add('active-nav-link')
        }
      } else if(scrollPosition < testimonials.offsetTop){
        document.querySelector('.active-nav-link').classList.remove('active-nav-link')
        nav.querySelector('a[href="/#work"').classList.add('active-nav-link')
      } else{
        document.querySelector('.active-nav-link').classList.remove('active-nav-link')
        nav.querySelector('a[href="/#testimonials"').classList.add('active-nav-link')
      }
    }

    if (!window.location.href.includes('blog') && !window.location.href.includes('contact')){
      window.addEventListener('scroll', trackActiveItem)
    } else{
      window.removeEventListener('scroll', trackActiveItem)
    }
    return () => window.removeEventListener('scroll', trackActiveItem)
  }, [])

  const handleNavClick = () =>{
    setNavOpen(!navOpen)
  }

  return(
    <header className={headerStyles.header}  >
    
      <a 
        href="# " 
        className={headerStyles.toggleNav} 
        onClick={handleNavClick}
        rel="noopener noreferrer"
      >
        <span>☰</span> Menu
      </a>


      <nav className={`${headerStyles.nav} ${navOpen ? 'open' : ''}`}>
        <div className={headerStyles.imgWrapper}>
          <Img className={headerStyles.img} fluid={data.avatar.childImageSharp.fluid} alt="Developer" />
        </div>
           
        <li className={headerStyles.navItem}>
          <Link activeClassName={"active-nav-link"} to="/">About</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link activeClassName={"active-nav-link"} to="/#work">Work</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link activeClassName={"active-nav-link"} to="/#testimonials">Testimonials</Link>
        </li>
      <li className={headerStyles.navItem}>
        <Link activeClassName={"active-nav-link"} to="/blog">Blog</Link>
      </li>
      <li className={headerStyles.navItem}>
        <Link activeClassName={"active-nav-link"} to="/contact">Contact</Link>
      </li>
          
        
        
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
