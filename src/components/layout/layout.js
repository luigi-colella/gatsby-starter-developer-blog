/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
/* App imports */
import Header from '../header'
import Footer from '../footer'
import '../../style/global.less'
import { container } from './layout.module.less'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            pages {
              home
              about
              archive
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          pages={data.site.siteMetadata.pages}
        />
        <div className={container}>{children}</div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
