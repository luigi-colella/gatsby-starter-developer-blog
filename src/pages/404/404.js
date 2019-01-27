/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
/* App imports */
import style from './404.module.less'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Button from '../../components/button'
import Config from '../../../config'
import Utils from '../../utils'

const NotFoundPage = ({ data }) => (
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
        <Button to={Utils.resolvePageUrl(Config.pages.home)}>Return to homepage</Button>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
{
  file (base: { eq: "404.png" }) {
    childImageSharp {
      fluid (maxWidth: 400) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
