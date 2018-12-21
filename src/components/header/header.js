/* Vendor imports */
import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
/* App imports */
import * as style from './header.module.less'

const Header = ({ siteTitle, description, links }) => (
  <div className={style.container}>
    <div className={style.title}>
      <h1>{siteTitle}</h1>
      <p>{description}</p>
    </div>
    <div className={style.list}>
      <ul>
        <li>
          <Link to={links.home}>Home</Link>
        </li>
        <li>
          <Link to={links.about}>About</Link>
        </li>
        <li>
          <Link to={links.archive}>Archive</Link>
        </li>
      </ul>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  description: PropTypes.string,
  links: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: '',
  description: '',
  links: {},
}

export default Header
