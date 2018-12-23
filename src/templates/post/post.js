/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
/* App imports */
import * as style from './post.module.less'
import Layout from '../../components/layout/layout'
import SEO from '../../components/seo/seo'
import TagList from '../../components/tag-list/tag-list'

const Post = ({ data }) => {
  const { title, date, tags } = data.markdownRemark.frontmatter
  const html = data.markdownRemark.html
  return (
    <Layout>
      <SEO title={title} keywords={tags} />
      <div>
        <div className={style.header}>
          <label>{date}</label>
          <h1>{title}</h1>
          <TagList tags={tags} position="center"/>
        </div>
        <div className={style.content}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query($postPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $postPath } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        tags
      }
    }
  }
`
