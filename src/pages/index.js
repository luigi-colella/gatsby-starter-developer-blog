/* Vendor imports */
import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
/* App imports */
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { post, tags } from './index.module.less'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title,
                image,
                tags,
                date
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => {
      const articles = data.allMarkdownRemark.edges.map(edge => edge.node);
      return (
        <Layout>
          <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
          <div>
            <section>
              <div>
                {articles.map(article => (
                  <div key={article.frontmatter.date} className={post}>
                    <label>{article.frontmatter.date}</label>
                    <h2>{article.frontmatter.title}</h2>
                    <p>{article.excerpt}</p>
                    <div className={tags}>
                      {article.frontmatter.tags.map(tag => (
                        <label>{tag}</label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Layout>
      );
    }}
  ></StaticQuery>
)

export default IndexPage
