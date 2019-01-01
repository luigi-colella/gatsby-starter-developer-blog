/* Vendor imports */
import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
/* App imports */
import * as style from './header.module.less'
import Utils from '../../../utils'

const Header = ({ siteTitle, description, pages }) => (
  <div className={style.container}>
    <div className={style.title}>
      <Link to={Utils.resolvePageUrl(pages.home)}>
        <h1>{siteTitle}</h1>
        <p>{description}</p>
      </Link>
    </div>
    <div className={style.list}>
      <ul>
        <li><Link to={Utils.resolvePageUrl(pages.home)}>Home</Link></li>
        <li><Link to={Utils.resolvePageUrl(pages.about)}>About</Link></li>
        <li><Link to={Utils.resolvePageUrl(pages.archive)}>Archive</Link></li>
      </ul>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  description: PropTypes.string,
  pages: PropTypes.shape({
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    archive: PropTypes.string.isRequired
  }).isRequired
}

Header.defaultProps = {
  siteTitle: '',
  description: ''
}

export default Header
