/* Vendor imports */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
/* App imports */
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostList from '../components/post-list'
import * as style from './index.module.less'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                path
                title
                image
                tags
                date(formatString: "MMMM DD, YYYY")
                cover {
                  childImageSharp {
                    fixed (height: 125 width: 222 cropFocus: CENTER) {
                      ...GatsbyImageSharpFixed_tracedSVG
                    }
                  }
                }
              }
              excerpt
              fileAbsolutePath
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <div>
          <section>
            <div className={style.header}>
              <h1>Last posts</h1>
            </div>
            <PostList posts={data.allMarkdownRemark.edges} />
          </section>
        </div>
      </Layout>
    )}
  />
)

export default IndexPage
