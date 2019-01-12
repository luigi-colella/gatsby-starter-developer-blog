/* Vendor imports */
import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaBars, FaGithub, FaLinkedin, FaRss } from 'react-icons/fa'
/* App imports */
import * as style from './header.module.less'
import Config from '../../../../config'
import Utils from '../../../utils'

class Header extends Component {

  constructor () {
    super()
    this.state = {
      collapsedMenu: true
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu = () => {
    this.setState({
      collapsedMenu: !this.state.collapsedMenu
    })
  }

  render = () => (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <div className={style.title}>
          <Link to={Utils.resolvePageUrl(Config.pages.home)}>
            <h1>{Config.siteTitle} {this.state.ver}</h1>
            <p>{Config.siteDescription}</p>
          </Link>
        </div>
        <div className={style.menuButton}><FaBars size="30" onClick={this.toggleMenu}/></div>
      </div>
      <div className={[style.list, ( this.state.collapsedMenu ? style.collapsedMenu : style.expandedMenu )].join(' ')}>
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
