/* Vendor imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
/* App imports */
import Constants from '../../constants'
import * as style from './tag-list.module.less'
import Utils from '../../utils'

const TagList = ({ tags, position }) => (
  <div className={style.tags} style={{
    justifyContent: position === 'center' ? 'center' : null
  }}>
    {tags.map(tag => (
      <Link to={Utils.resolvePageUrl(Constants.pages.tag, tag)} key={tag}>
        {tag}
      </Link>
    ))}
  </div>
)

export default TagList;

TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    position: PropTypes.oneOf(['center'])
}