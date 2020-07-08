import React from "react"

import footerStyles from "./styles/footer.module.scss"

const Footer = ({ title = "Mahmoud Ahmed" }) => {
  return (
    <footer className={footerStyles.footer}>
      <span>
        © {new Date().getFullYear()}, Developed by
        {` `}
        <a href="https://www.twitter.com/7odaGeek">{title}</a>
        &nbsp;Design by&nbsp;
        <a href="https://twitter.com/realvjy">vijay verma</a>
      </span>
    </footer>
  )
}

export default Footer
