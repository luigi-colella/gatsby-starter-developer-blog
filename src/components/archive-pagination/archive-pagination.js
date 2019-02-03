/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
/* App imports */
import Button from '../../components/button'
import Config from '../../../config'
import Utils from '../../utils'
import style from './archive-pagination.module.less'

const ArchivePagination = ({ prevPage, nextPage }) => (
  <div className={style.container}>
    {prevPage ? (
      <Button
        to={Utils.resolvePageUrl(Config.pages.archive, prevPage)}
        buttonStyle={style.buttonLeft}
      >
        <FaArrowLeft />
        <span>Newer posts</span>
      </Button>
    ) : null}
    {nextPage ? (
      <Button
        to={Utils.resolvePageUrl(Config.pages.archive, nextPage)}
        buttonStyle={style.buttonRight}
      >
        <span>Older posts</span>
        <FaArrowRight />
      </Button>
    ) : null}
  </div>
)

ArchivePagination.propTypes = {
  prevPage: PropTypes.number,
  nextPage: PropTypes.number,
}

export default ArchivePagination
