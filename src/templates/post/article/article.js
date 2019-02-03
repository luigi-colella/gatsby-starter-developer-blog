/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import 'prismjs/themes/prism-solarizedlight.css'
import './highlight-syntax.less'
/* App imports */
import style from './article.module.less'

const Article = ({ html }) => (
  <div className={style.container}>
    <article dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)

Article.propTypes = {
  html: PropTypes.string.isRequired,
}

export default Article
