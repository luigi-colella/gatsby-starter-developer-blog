/* Vendor imports */
import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
/* App imports */
import Layout from '../components/layout'
import SEO from '../components/seo'
import Utils from '../utils'
import * as style from './tag.module.less'

const Tag = ({ data }) => {
  const rawTags = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter.tags).reduce((prev, curr) => prev.concat(curr));
  const tags = rawTags.filter((tag, index) => index === rawTags.indexOf(tag)).sort() // Remove duplicates and sort values
  const tagPage = data.site.siteMetadata.pages.tag
  return (
    <Layout>
      <SEO
        title="Tags"
        description="All present tags in the site"
        path={tagPage}
        keywords={tags}
      />
      <div className={style.container}>
        <h1>Tags</h1>
        {tags.map(tag => (
          <Link to={Utils.resolvePageUrl(tagPage, tag)} className={style.card} key={tag}>
            <div className={style.cover}>
              <Image fluid={data.allFile.edges.find(edge => edge.node.name === tag).node.childImageSharp.fluid} />
            </div>
            <div className={style.content}>
              <h2>{tag}</h2>
              <p>{tagExcerpts[tag]}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default Tag

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
    site {
      siteMetadata {
        pages {
          tag
        }
      }
    }
    allFile ( filter: { relativeDirectory: { eq: "tags" } } ) {
      edges {
        node {
          name
          childImageSharp {
            fluid (maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const tagExcerpts = {
  angular: 'Angular is an open source web application platform.',
  react: 'React is an open source JavaScript library used for designing user interfaces.',
  vuejs: 'Vue.js is a JavaScript framework for building interactive web applications.'
}