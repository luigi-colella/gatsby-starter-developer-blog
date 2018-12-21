/* Vendor imports */
import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
/* App imports */
import Constants from '../constants'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { post, tags } from './index.module.less'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                image
                tags
                date(formatString: "MMMM DD, YYYY")
                path
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => {
      const articles = data.allMarkdownRemark.edges.map(edge => edge.node)
      const tagPath = Constants.pages.tag
      return (
        <Layout>
          <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
          <div>
            <section>
              <div>
                {articles.map(article => (
                  <div key={article.frontmatter.date} className={post}>
                    <label>{article.frontmatter.date}</label>
                    <h2>
                      <Link to={article.frontmatter.path}>
                        {article.frontmatter.title}
                      </Link>
                    </h2>
                    <p>{article.excerpt}</p>
                    <div className={tags}>
                      {article.frontmatter.tags.map(tag => (
                        <Link to={tagPath + '/' + tag} key={tag}>
                          <label>{tag}</label>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Layout>
      )
    }}
  />
)

export default IndexPage
