import React from "react"
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo'

import blogStyles from './styles/blog.module.scss';

const BlogPage = () => {
  const data = useStaticQuery(
    graphql`
     query{
      allContentfulBlogPost(
        sort: {
          fields: publishDate,
          order: DESC
          }
      ){
        edges{
          node{
            title,
            slug
          }
        }
      }
    }
    `
  );

  return (
    <Layout>
      <SEO title="Blog" />
      <section>
        <h3 className="section-title">Blog</h3>
        <ul className={blogStyles.posts}>
          {
            data.allContentfulBlogPost.edges.map((edge, index) => (
              <li
                key={`edge_${index}`}
                className={blogStyles.post}
              >
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2 className={blogStyles.postTitle}>
                    {edge.node.title}
                  </h2>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  )
}

export default BlogPage;