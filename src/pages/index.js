/* Vendor imports */
import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import * as style from './index.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import TagList from '../components/tag-list/tag-list'

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
                    fixed (height: 125) {
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
    render={data => {
      const articles = data.allMarkdownRemark.edges.map(edge => edge.node)
      return (
        <Layout>
          <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
          <div>
            <section>
              <div>
                {articles.map(article => {
                  const { title, date, path, tags, cover } = article.frontmatter;
                  return (
                    <div key={date} className={style.post}>
                      <div className={style.preview}>
                        <Link to={path}>
                          <Img fixed={cover.childImageSharp.fixed} />
                        </Link>
                      </div>
                      <div className={style.postContent}>
                        <Link to={path}>
                          <label>{date}</label>
                          <h2>{title}</h2>
                          <p>{article.excerpt}</p>
                        </Link>
                        <TagList tags={tags} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>
        </Layout>
      )
    }}
  />
)

export default IndexPage
