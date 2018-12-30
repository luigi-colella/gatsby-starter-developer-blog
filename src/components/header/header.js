/* Vendor imports */
import { Link, StaticQuery, graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
/* App imports */
import * as style from './header.module.less'
import Utils from '../../utils'

const Header = ({ siteTitle, description }) => (
  <StaticQuery
    query={query}
    render={data => {
      const { home, about, archive } = data.site.siteMetadata.pages
      return (
        <div className={style.container}>
          <div className={style.title}>
            <Link to={Utils.resolvePageUrl(home)}>
              <h1>{siteTitle}</h1>
              <p>{description}</p>
            </Link>
          </div>
          <div className={style.list}>
            <ul>
              <li><Link to={Utils.resolvePageUrl(home)}>Home</Link></li>
              <li><Link to={Utils.resolvePageUrl(about)}>About</Link></li>
              <li><Link to={Utils.resolvePageUrl(archive)}>Archive</Link></li>
            </ul>
          </div>
        </div>
      )
    }}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  description: PropTypes.string
}

Header.defaultProps = {
  siteTitle: '',
  description: ''
}

export default Header

export const query = graphql`
  {
    site {
      siteMetadata {
        pages {
          home
          about
          archive
        }
      }
    }
  }
`
