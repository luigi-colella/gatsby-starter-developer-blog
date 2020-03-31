/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
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
      path="404"
      keywords={['javascript', 'frontend', 'blog']}
    />
    <div className={style.container}>
      <div className={style.image}>
        <img src={data.file.publicURL} alt="Gif for 404 error" />
      </div>
      <div className={style.message}>
        <h1>Page not found</h1>
        <Button to={Utils.resolvePageUrl(Config.pages.home)}>
          Return to homepage
        </Button>
      </div>
    </div>
  </Layout>
)

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      publicUrl: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
}

export const query = graphql`
  {
    file (base: {eq: "404.gif"}) {
      publicURL
    }
  }
`
export default NotFoundPage
