/* Vendor imports */
import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
/* App imports */
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import Constants from '../constants'
import * as style from './404.module.less'
import Utils from '../utils'

const NotFoundPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO
        title="404: Page not found"
        description="404 Page"
        path='404'
        keywords={['javascript', 'frontend', 'blog']}
      />
      <div className={style.container}>
        <div className={style.image}>
          <Image fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className={style.message}>
          <h1>Page not found</h1>
          <Link to={Utils.resolvePageUrl(Constants.pages.home)}>Return to homepage</Link>
        </div>
      </div>
  
    </Layout>
  )
}

export default NotFoundPage

export const query = graphql`
{
  file (base: { eq: "404.png" }) {
    childImageSharp {
      fluid (maxWidth: 450) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
