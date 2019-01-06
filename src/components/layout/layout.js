/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
/* App imports */
import Header from './header'
import Footer from './footer'
import '../../style/global.less'
import * as style from './layout.module.less'

const Layout = ({ children, title }) => (
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
              tag
            }
            social {
              github
              linkedin
              rss
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
          social={data.site.siteMetadata.social}
        />
        <div className={style.container}>
          { title ? <div className={style.title}><h1>{title}</h1></div> : null }
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

Layout.defaultProps = {
  title: ''
}

export default Layout
