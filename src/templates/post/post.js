/* Vendor imports */
import React from 'react'
import { graphql, Link } from 'gatsby'
/* App imports */
import Constants from '../../constants'
import Layout from '../../components/layout/layout'
import SEO from '../../components/seo'
import * as style from './post.module.less'

const Post = ({ data }) => {
  const { title, date, tags } = data.markdownRemark.frontmatter
  const html = data.markdownRemark.html
  const tagPath = Constants.pages.tag
  return (
    <Layout>
      <SEO title={title} keywords={tags} />
      <div>
        <div className={style.header}>
          <label>{date}</label>
          <h1>{title}</h1>
          <div className={style.tags}>
            {tags.map(tag => (
              <label key={tag}>
                <Link to={tagPath + '/' + tag}>{tag}</Link>
              </label>
            ))}
          </div>
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
