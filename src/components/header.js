import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Scrollspy from 'react-scrollspy'

import avatar from '../images/avatar.png';
import headerStyles from './styles/header.module.scss';

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}  >

    <div className={headerStyles.devImg}>
      <img src={avatar} alt="Developer" />
    </div>

    <nav className={headerStyles.nav}>
      <Scrollspy items={['about', 'work', 'testimonials']} currentClassName="active-nav-link"  >
        <li className={headerStyles.navItem}>
          <AnchorLink
            activeClassName={headerStyles.activeItem}
            to="/#about"
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
