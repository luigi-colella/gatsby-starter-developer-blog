/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import 'prismjs/themes/prism-solarizedlight.css';
/* App imports */
import * as style from './post.module.less'
import Layout from '../../components/layout'
import TagList from '../../components/tag-list'
import SEO from '../../components/seo'

const Post = ({ data }) => {
  const { title, date, tags, cover } = data.markdownRemark.frontmatter
  const html = data.markdownRemark.html
  return (
    <Layout>
      <SEO title={title} keywords={tags} />
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.title}>
            <label>{date}</label>
            <h1>{title}</h1>
            <TagList tags={tags} position="center"/>
          </div>
          <div className={style.cover}>
            <Img fluid={cover.childImageSharp.fluid} />
          </div>
        </div>
        <div className={style.content}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query($postPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $postPath } }) {
      html
      frontmatter {
        title
        date (formatString: "MMMM DD, YYYY")
        path
        tags
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
`
