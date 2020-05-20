import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql} from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Scrollspy from 'react-scrollspy'
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
        <Scrollspy items={['about', 'work', 'testimonials']} currentClassName="active-nav-link"  >
          <li className={headerStyles.navItem}>
            <AnchorLink
              activeClassName={headerStyles.activeItem}
              to="/"
              title="About"
            />
          </li>
          <li className={headerStyles.navItem}>
            <AnchorLink
              activeClassName={headerStyles.activeItem}
              to="/#work"
              title="Work"
            />
          </li>
          <li className={headerStyles.navItem}>
            <AnchorLink
              activeClassName={headerStyles.activeItem}
              to="/#testimonials"
              title="Testimonials"
            />
          </li>
          <li className={headerStyles.navItem}>
            <Link activeClassName={headerStyles.activeItem} to="/blog">Blog</Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link activeClassName={headerStyles.activeItem} to="/contact">Contact</Link>
          </li>
        </Scrollspy>
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
