/* Vendor imports */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
/* App imports */
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostList from '../components/post-list'
import ArchivePagination from '../components/archive-pagination'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            pages {
              tag
            }
          }
        }
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
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
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          path=''
          keywords={['javascript', 'frontend', 'blog']}
        />
        <div>
          <section>
            <PostList
              posts={data.allMarkdownRemark.edges}
              tagPagePath={data.site.siteMetadata.pages.tag}
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
