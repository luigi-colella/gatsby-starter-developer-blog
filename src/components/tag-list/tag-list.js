/* Vendor imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
/* App imports */
import * as style from './tag-list.module.less'
import Utils from '../../utils'

const TagList = ({ tags, tagPagePath, position }) => (
  <div className={style.tags} style={{ justifyContent: position === 'center' ? 'center' : null }}>
    {tags.map(tag => (
      <Link to={Utils.resolvePageUrl(tagPagePath, tag)} key={tag}>
        {tag}
      </Link>
    ))}
  </div>
)

export default TagList;

TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    tagPagePath: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['center'])
}