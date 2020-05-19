import React from 'react'

import footerStyles from './styles/footer.module.scss'


const Footer = ({ title = "Mahmoud Ahmed"}) => {
  return (
    <footer className={footerStyles.footer}> 
      <span>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.twitter.com/7odaGeek">{title}</a>
      </span>
      <span>
        , Designed By <a href="https://dribbble.com/realvjy">vijay verma</a>
      </span>
    </footer>
  )
}


export default Footer;