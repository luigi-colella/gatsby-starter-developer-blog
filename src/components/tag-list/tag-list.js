/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
/* App imports */
import style from './tag-list.module.less'
import Config from '../../../config'
import Utils from '../../utils'

const TagList = ({ tags }) => (
  <div className={style.tags}>
    {tags
      .filter((tag, index) => index === tags.indexOf(tag)) // Remove duplicate values
      .sort()
      .map(tag => (
        <Link to={Utils.resolvePageUrl(Config.pages.tag, tag)} key={tag}>
          {Config.tags[tag].name || Utils.capitalize(tag)}
        </Link>
      ))}
  </div>
)

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TagList
