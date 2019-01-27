/* Vendor imports */
import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Config from '../../../config'
import Utils from '../../utils'
import style from './tag.module.less'

const Tag = ({ data }) => {

  const rawTags = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter.tags).reduce((prev, curr) => prev.concat(curr));
  const tags = rawTags.filter((tag, index) => index === rawTags.indexOf(tag)).sort() // Remove duplicates and sort values
  const tagPage = Config.pages.tag

  return (
    <Layout title="Tags">
      <SEO
        title="Tags"
        description="All present tags in the site"
        path={tagPage}
      />
      <div>
        {tags.map(tag => (
          <Link to={Utils.resolvePageUrl(tagPage, tag)} className={style.card} key={tag}>
            <div className={style.cover}>
              <Image fluid={data.allFile.edges.find(edge => edge.node.name === tag).node.childImageSharp.fluid} />
            </div>
            <div className={style.content}>
              <h2>{tag}</h2>
              <p>{tagExcerpts[tag]}</p>
              <label>{`${rawTags.filter(sTag => sTag === tag).length} Posts`}</label>
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
    allMarkdownRemark (
      filter: { fileAbsolutePath: { regex: "/index.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
    allFile (
      filter: { relativeDirectory: { eq: "tags" } }
    ) {
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

// Define here excerpts for tags
const tagExcerpts = {
  angular: 'Angular is an open source web application platform.',
  electron: 'Electron is a framework for building cross-platform desktop applications with web technology.',
  javascript: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
  laravel: 'Laravel is a PHP framework for building web applications following the MVC pattern.',
  nodejs: 'Node.js is a tool for executing JavaScript in a variety of environments.',
  rxjs: 'RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.',
  sass: 'Sass is a stable extension to classic CSS.',
  typescript: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  react: 'React is an open source JavaScript library used for designing user interfaces.',
  vuejs: 'Vue.js is a JavaScript framework for building interactive web applications.'
}