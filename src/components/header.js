import { Link } from "gatsby"
import PropTypes from "prop-types"
import headerStyles from './header.module.scss';
import React from "react"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}  >
    <h1 style={{ margin: 0 }}>

    </h1>    
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navItem}>
            <Link to="/">{siteTitle}</Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
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
