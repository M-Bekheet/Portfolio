import React from "react"
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from './blog.module.scss';

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

  console.log(data)

  return (
    <Layout>
      <h1>Blog</h1>
      <div >
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
      </div>


    </Layout>
  )
}

export default BlogPage;