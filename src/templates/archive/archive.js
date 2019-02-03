/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import PostList from '../../components/post-list'
import ArchivePagination from '../../components/archive-pagination'
import Config from '../../../config'

const Archive = ({ data, pageContext }) => {
  const { archivePage, lastArchivePage } = pageContext
  const prevPage = archivePage > 1 ? archivePage - 1 : null
  const nextPage = archivePage < lastArchivePage ? archivePage + 1 : null

  return (
    <Layout title="Archive">
      <SEO
        title={`Archive | Page ${archivePage}`}
        description="Old posts"
        path={Config.pages.archive}
      />
      <PostList posts={data.allMarkdownRemark.edges} />
      <ArchivePagination prevPage={prevPage} nextPage={nextPage} />
    </Layout>
  )
}

Archive.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    archivePage: PropTypes.number.isRequired,
    lastArchivePage: PropTypes.number.isRequired,
  }).isRequired,
}

export const query = graphql`
  query($postPaths: [String!]) {
    allMarkdownRemark(
      filter: {
        frontmatter: { path: { in: $postPaths } }
        fileAbsolutePath: { regex: "/index.md$/" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            tags
            date(formatString: "MMMM DD, YYYY")
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
  }
`

export default Archive
