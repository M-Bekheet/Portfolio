module.exports = {
  siteMetadata: {
    title: `Mahmoud Ahmed Portfolio`,
    description: `Freelance Front-end / ReactJS Developer Portfolio`,
    author: `@7odaGeek`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mahmoud-ahmed-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#0c1225`,
        theme_color: `#ff4ba8`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
