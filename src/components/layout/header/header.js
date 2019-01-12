/* Vendor imports */
import { Link } from 'gatsby'
import React from 'react'
import { FaBars, FaGithub, FaLinkedin, FaRss } from 'react-icons/fa'
/* App imports */
import * as style from './header.module.less'
import Config from '../../../../config'
import Utils from '../../../utils'

const Header = () => {
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
          <Link to={Utils.resolvePageUrl(Config.pages.home)}>
            <h1>{Config.siteTitle}</h1>
            <p>{Config.siteDescription}</p>
          </Link>
        </div>
        <div className={style.menuButton}><FaBars size="30" onClick={openMenu}/></div>
      </div>
      <div id={idMenu} className={style.list}>
        <ul>
          <li><Link to={Utils.resolvePageUrl(Config.pages.home)}>Home</Link></li>
          <li><Link to={Utils.resolvePageUrl(Config.pages.tag)}>Tags</Link></li>
          <li><Link to={Utils.resolvePageUrl(Config.pages.about)}>About</Link></li>
        </ul>
        <ul>
          <li><a rel="nofollow" href={Config.social.github}><FaGithub size="30"/></a></li>
          <li><a rel="nofollow" href={Config.social.linkedin}><FaLinkedin size="30"/></a></li>
          <li><Link to={Utils.resolveUrl(Config.social.rss)}><FaRss size="30" /></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
