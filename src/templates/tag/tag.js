/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import PostList from '../../components/post-list'
import Utils from '../../utils'

const TagPage = ({ pageContext, data }) => {

  const posts = data.allMarkdownRemark.edges
  const tagName = pageContext.tag
  const tagPagePath = data.site.siteMetadata.pages.tag;
  
  return (
    <Layout title={tagName}>
      <SEO
        title={tagName}
        description={`All post about ${tagName}`}
        path={Utils.resolvePageUrl(tagPagePath, tagName)}
        keywords={[tagName]}
      />
      <PostList posts={posts} tagPagePath={tagPagePath}/>
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
            cover {
              childImageSharp {
                fluid (maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          excerpt
        }
      }
    }
    site {
      siteMetadata {
        pages {
          tag
        }
      }
    }
  }
`
