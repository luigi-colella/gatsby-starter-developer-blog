/* Vendor imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
/* App imports */
import * as style from './tag-list.module.less'
import Config from '../../../config'
import Utils from '../../utils'

const TagList = ({ tags, position }) => (
  <div className={style.tags} style={{ justifyContent: position === 'center' ? 'center' : null }}>
    {
      tags
      .filter((tag, index) => index === tags.indexOf(tag)) // Remove duplicate values
      .sort()
      .map(tag => (
        <Link to={Utils.resolvePageUrl(Config.pages.tag, tag)} key={tag}>
          {tag}
        </Link>
      ))
    }
  </div>
)

export default TagList;

TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    position: PropTypes.oneOf(['center'])
}