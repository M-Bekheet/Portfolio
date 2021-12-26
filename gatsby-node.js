const path = require('path');


module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blogPost.js');
  const res = await graphql(`
    query{
      allContentfulBlogPost{
        edges{
          node{
            title,
            slug,
            publishDate(formatString: "MMMM Do, YYYY"),
          }
        }
      }
    }
  `);

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}