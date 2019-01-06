/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import PostList from '../../components/post-list'
import ArchivePagination from '../../components/archive-pagination'

const Archive = ({ data, pageContext }) => {

  const { archivePage, lastArchivePage } = pageContext;
  const prevPage = archivePage > 1 ? archivePage - 1 : null;
  const nextPage = archivePage < lastArchivePage ? archivePage + 1 : null;

  return (
    <Layout title="Archive">
      <SEO
        title={`Archive | Page ${archivePage}`}
        description="Old posts"
        path={data.site.siteMetadata.pages.archive}
        keywords={['archive']}
      />
      <PostList posts={data.allMarkdownRemark.edges} tagPagePath={data.site.siteMetadata.pages.tag}/>
      <ArchivePagination prevPage={prevPage} nextPage={nextPage} />
    </Layout>
  )
}

export default Archive;

export const query = graphql`
query ($postPaths: [String!]) {
  allMarkdownRemark(
    filter: {frontmatter: {path: {in: $postPaths}}},
    sort: {fields: [frontmatter___date], order: DESC}
  ) {
    edges {
      node {
        frontmatter {
          path
          title
          tags
          date(formatString: "MMMM DD, YYYY")
          cover {
            childImageSharp {
              fluid(maxWidth: 600) {
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
        archive
      }
    }
  }
}
`