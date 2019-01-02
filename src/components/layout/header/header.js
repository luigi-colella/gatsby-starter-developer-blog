/* Vendor imports */
import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import { FaGithub, FaLinkedin, FaBars } from 'react-icons/fa'
/* App imports */
import * as style from './header.module.less'
import Utils from '../../../utils'

const Header = ({ siteTitle, description, pages, social }) => {
  const idMenu = 'collapsable--menu'
  const openMenu = () => {
    if (openMenu.opened) {
      document.getElementById(idMenu).style.display = "none";
      openMenu.opened = false;
    } else {
      document.getElementById(idMenu).style.display = "flex";
      openMenu.opened = true;
    }
  }
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <div className={style.title}>
          <Link to={Utils.resolvePageUrl(pages.home)}>
            <h1>{siteTitle}</h1>
            <p>{description}</p>
          </Link>
        </div>
        <div className={style.menuButton}><FaBars size="30" onClick={openMenu}/></div>
      </div>
      <div id={idMenu} className={style.list}>
        <ul>
          <li><Link to={Utils.resolvePageUrl(pages.home)}>Home</Link></li>
          <li><Link to={Utils.resolvePageUrl(pages.about)}>About</Link></li>
          <li><Link to={Utils.resolvePageUrl(pages.archive)}>Archive</Link></li>
        </ul>
        <ul>
          <li><a rel="nofollow" href={social.github}><FaGithub size="30"/></a></li>
          <li><a rel="nofollow" href={social.linkedin}><FaLinkedin size="30"/></a></li>
        </ul>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  description: PropTypes.string,
  pages: PropTypes.shape({
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    archive: PropTypes.string.isRequired
  }).isRequired,
  social: PropTypes.shape({
    github: PropTypes.string,
    linkedin: PropTypes.string
  })
}

Header.defaultProps = {
  siteTitle: '',
  description: ''
}

export default Header
