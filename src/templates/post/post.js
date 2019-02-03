/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Heading from './heading'
import ArticleHeading from './article-heading'
import Article from './article'
import Comments from './comments'
import Share from './share'
import SuggestedPosts from './suggested-posts'
import Config from '../../../config'
import Utils from '../../utils'
import style from './post.module.less'

const Post = ({ data, pageContext }) => {
  const { html, frontmatter, timeToRead } = data.markdownRemark
  const { title, date, tags, cover, path, excerpt } = frontmatter
  const translations =
    pageContext.translations.length > 1 ? pageContext.translations : null
  const img = cover.childImageSharp.fluid
  const canonicalUrl = Utils.resolvePageUrl(
    Config.siteUrl,
    Config.pathPrefix,
    path
  )
  const coverUrl = Utils.resolveUrl(Config.siteUrl, img.src)
  const suggestedPosts = Utils.getSuggestedPosts(
    data.markdownRemark,
    data.allMarkdownRemark,
    3
  )

  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        path={path}
        contentType="article"
        imageUrl={img.src}
        keywords={tags}
        translations={translations}
      />
      <div className={style.container}>
        <Heading title={title} tags={tags} cover={img} coverTitle={excerpt} />
        <div className={style.content}>
          <ArticleHeading
            excerpt={excerpt}
            date={date}
            time={timeToRead}
            translations={translations}
          />
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

export const pageQuery = graphql`
  query($postPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $postPath } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
        tags
        path
        excerpt
        cover {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { path: { ne: $postPath } }
        fileAbsolutePath: { regex: "/index.md$/" }
      }
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
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
export default Post
