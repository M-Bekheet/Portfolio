import React from "react"
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import postStyles from './styles/blogPost.module.scss';

export const query = graphql`query(
      $slug: String!
    ){
      contentfulBlogPost(
        slug: {
          eq: $slug
        }
      ){
        title, 
        body {
          json
        }
      }
    }`;



const BlogPage = (props) => {

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <div className={postStyles.postImg}><img src={url} alt={alt} /></div>
      }
    }
  }

  return (
    <Layout>
      <div className={postStyles.post}>
        <h1 className={postStyles.postTitle}>{props.data.contentfulBlogPost.title}</h1>
        {
          documentToReactComponents(props.data.contentfulBlogPost.body.json, options)
        }
      </div>
    </Layout>
  )
}

export default BlogPage;