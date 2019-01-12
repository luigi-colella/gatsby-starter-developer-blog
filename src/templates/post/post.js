/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import TagList from '../../components/tag-list'
import ArticleHeading from './article-heading'
import Article from './article'
import Comments from './comments'
import Share from './share'
import SuggestedPosts from './suggested-posts'
import Config from '../../../config'
import Utils from '../../utils'
import * as style from './post.module.less'

const Post = ({ data }) => {

  const { html, frontmatter, excerpt, timeToRead } = data.markdownRemark
  const { title, date, tags, cover, coverAlt, path } = frontmatter
  const img = cover.childImageSharp.fluid
  const canonicalUrl = Utils.resolvePageUrl(Config.siteUrl, Config.pathPrefix, path)
  const coverUrl = Utils.resolveUrl(Config.siteUrl, img.src)
  const suggestedPosts = Utils.getSuggestedPosts(data.markdownRemark, data.allMarkdownRemark, 3)

  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        path={path}
        contentType="article"
        image={{url: img.src, alt: coverAlt}}
        keywords={tags}
      />
      <div>
        <div className={style.header}>
          <div className={style.title}>
            <h1>{title}</h1>
            <TagList tags={tags} />
          </div>
          <div className={style.cover}>
            <Img fluid={img} title={title}/>
          </div>
        </div>
        <div className={style.content}>
          <ArticleHeading date={date} time={timeToRead}/>
          <Article html={html} />
          <Share
            pageCanonicalUrl={canonicalUrl}
            title={title}
            description={excerpt}
            tags={tags}
            coverUrl={coverUrl}
          />
        </div>
        <SuggestedPosts posts={suggestedPosts} />
        <Comments pageCanonicalUrl={canonicalUrl} pageId={title} />
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
      timeToRead
      frontmatter {
        title
        date (formatString: "DD MMM YYYY")
        tags
        path
        cover {
          childImageSharp {
            fluid (maxWidth: 700) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        coverAlt
      }
    }
    allMarkdownRemark (
      filter: { frontmatter: { path: { ne: $postPath } } }
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
`
