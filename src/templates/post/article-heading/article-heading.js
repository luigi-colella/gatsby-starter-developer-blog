/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa'
import { MdTranslate } from 'react-icons/md'
/* App imports */
import style from './article-heading.module.less'

const ArticleHeading = ({ excerpt, date, time, translations }) => (
  <div className={style.container}>
    <div className={style.excerpt}>
      <p>{excerpt}</p>
    </div>
    <label>
      <strong>
        <FaRegCalendarAlt /> Date:{' '}
      </strong>
      <span>{date}</span>
    </label>
    <label>
      <strong>
        <FaRegClock /> Time to read:{' '}
      </strong>
      <span>{time}m</span>
    </label>
    {translations ? (
      <label>
        <strong>
          <MdTranslate /> Translated in:{' '}
        </strong>
        {translations
          .sort((translationA, translationB) =>
            translationA.hreflang < translationB.hreflang ? -1 : 1
          )
          .map(({ hreflang, path }, index) => (
            <span key={hreflang}>
              <Link to={path}>{hreflangMap[hreflang]}</Link>
              {index !== translations.length - 1 ? ', ' : null}
            </span>
          ))}
      </label>
    ) : null}
  </div>
)

ArticleHeading.propTypes = {
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  translations: PropTypes.arrayOf(
    PropTypes.shape({
      hreflang: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
}

// Languages code ISO 639-1 map
const hreflangMap = {
  en: 'English',
  it: 'Italian',
  fr: 'French',
}

export default ArticleHeading
