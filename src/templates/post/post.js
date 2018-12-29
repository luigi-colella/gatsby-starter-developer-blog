/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import 'prismjs/themes/prism-solarizedlight.css';
/* App imports */
import Comments from './comments'
import * as style from './post.module.less'
import './highlight-syntax.less'
import Layout from '../../components/layout'
import TagList from '../../components/tag-list'
import SEO from '../../components/seo'
import Utils from '../../utils'

const Post = ({ data }) => {
  const { html, excerpt, frontmatter } = data.markdownRemark
  const { title, date, tags, cover, coverAlt, path } = frontmatter
  const img = cover.childImageSharp.fluid
  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        path={path}
        contentType={'article'}
        image={{url: img.src, alt: coverAlt}}
        keywords={tags}
      />
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.title}>
            <label>{date}</label>
            <h1>{title}</h1>
            <TagList tags={tags} position="center"/>
          </div>
          <div className={style.cover}>
            <Img fluid={img} title={title}/>
          </div>
        </div>
        <div className={style.content}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <Comments
          pageCanonicalUrl={Utils.resolvePageUrl(data.site.siteMetadata.hostname, data.site.pathPrefix, path)}
          pageId={title}
        />
      </div>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query($postPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $postPath } }) {
      html
      excerpt
      frontmatter {
        title
        date (formatString: "MMMM DD, YYYY")
        tags
        path
        cover {
          childImageSharp {
            fluid (maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        coverAlt
      }
    }
    site {
      siteMetadata {
        hostname
      }
      pathPrefix
    }
  }
`
