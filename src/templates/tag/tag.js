/* Vendor imports */
import React from 'react'
import { graphql, Link } from 'gatsby'
/* App imports */
import Constants from '../../constants'
import Layout from '../../components/layout/layout'
import SEO from '../../components/seo'
import * as style from './tag.module.less'

const TagPage = ({ pageContext, data }) => {
  const posts = data.allMarkdownRemark.edges
  const tagName = pageContext.tag
  return (
    <Layout>
      <SEO title={tagName} keywords={[tagName]} />
      <div className={style.header}>
        <h1>{tagName}</h1>
        <label>{posts.length} Posts</label>
      </div>
      <div className={style.content}>
        {posts.map(post => {
          const { title, date, path, tags } = post.node.frontmatter
          return (
            <div key={title} className={style.post}>
              <label>{date}</label>
              <h2>
                <Link to={path}>{title}</Link>
              </h2>
              <div className={style.tags}>
                {tags.map(tag => (
                  <label key={tag}>
                    <Link to={Constants.pages.tag + '/' + tag}>{tag}</Link>
                  </label>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default TagPage

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
          }
        }
      }
    }
  }
`
