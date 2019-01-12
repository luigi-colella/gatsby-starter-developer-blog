/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa'
/* App imports */
import * as style from './article-heading.module.less'

const ArticleHeading = ({ date, time, children }) => (
  <div className={style.container}>
    <label><strong><FaRegCalendarAlt /> Date: </strong><span>{date}</span></label>
    <label><strong><FaRegClock /> Time to read: </strong><span>{time}m</span></label>
    {children}
  </div>
)

ArticleHeading.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired
}

export default ArticleHeading

