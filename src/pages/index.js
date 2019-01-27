/* Vendor imports */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
/* App imports */
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostList from '../components/post-list'
import ArchivePagination from '../components/archive-pagination'
import Config from '../../config'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/index.md$/" }}
        ) {
          edges {
            node {
              frontmatter {
                path
                title
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
      }
    `}
    render={data => (
      <Layout>
        <SEO
          title="Home"
          description={Config.siteDescription}
          path=''
        />
        <PostList posts={data.allMarkdownRemark.edges} />
        <ArchivePagination nextPage={2} />
      </Layout>
    )}
  />
)

export default IndexPage
