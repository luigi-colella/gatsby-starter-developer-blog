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
      }
    `}
    render={data => (
      <Layout title="Last posts">
        <SEO
          title="Home"
          description={Config.siteDescription}
          path=''
        />
        <div>
          <section>
            <PostList
              posts={data.allMarkdownRemark.edges}
              highlightFirstItem={true}
            />
            <ArchivePagination nextPage={2} />
          </section>
        </div>
      </Layout>
    )}
  />
)

export default IndexPage
