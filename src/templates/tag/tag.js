/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import PostList from '../../components/post-list'
import styles from './tag.module.less'
import Config from '../../../config'
import Utils from '../../utils'

const TagPage = ({ pageContext, data }) => {

  const posts = data.allMarkdownRemark.edges
  const tagName = pageContext.tag
  const tagPagePath = Config.pages.tag;
  const tagImage = data.allFile.edges.find(edge => edge.node.name === tagName).node.childImageSharp.fluid;
  
  return (
    <Layout>
      <SEO
        title={tagName}
        description={`All post about ${tagName}`}
        path={Utils.resolvePageUrl(tagPagePath, tagName)}
        keywords={[tagName]}
      />
      <div className={styles.heading}>
        <div><h1>{tagName}</h1></div>
        <div className={styles.cover}><Img fluid={tagImage} /></div>
      </div>
      <PostList posts={posts} />
    </Layout>
  )
}

export default TagPage

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } }, fileAbsolutePath: { regex: "/index.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
            cover {
              childImageSharp {
                fluid (maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    allFile (filter: { name: { eq: $tag } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid (maxHeight: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
