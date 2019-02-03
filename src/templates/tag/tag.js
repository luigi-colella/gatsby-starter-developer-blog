/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import PostList from '../../components/post-list'
import style from './tag.module.less'
import Config from '../../../config'
import Utils from '../../utils'

const TagPage = ({ data, pageContext }) => {
  const tag = pageContext.tag
  const tagName = Config.tags[tag].name || Utils.capitalize(tag)
  const tagPagePath = Config.pages.tag
  const tagImage = data.allFile.edges.find(edge => edge.node.name === tag).node
    .childImageSharp.fluid

  return (
    <Layout>
      <SEO
        title={tagName}
        description={`All post about ${tagName}`}
        path={Utils.resolvePageUrl(tagPagePath, tag)}
        keywords={[tagName]}
      />
      <div className={style.heading}>
        <div>
          <h1>{tagName}</h1>
        </div>
        <div className={style.cover}>
          <Img fluid={tagImage} />
        </div>
      </div>
      <PostList posts={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

TagPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string.isRequired,
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.object.isRequired,
            }).isRequired,
          }).isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fileAbsolutePath: { regex: "/index.md$/" }
      }
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
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    allFile(filter: { name: { eq: $tag }, dir: { regex: "/tags$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxHeight: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default TagPage
