require("dotenv").config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    title: `Mahmoud Ahmed`,
    description: `Freelance Front-end / ReactJS Developer`,
    author: `@7odaGeek`,
    siteUrl: `https://www.web-dev.works`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mahmoud-ahmed-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        theme_color: `#1a182f`,
        background_color: `#ff4ba8`,
        display: `minimal-ui`,
        icon: `src/images/avatar.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Raleway",
              variants: ["400", "700"],
              fontDisplay: "swap",
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: true,
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/lartwel.github.io"
}
