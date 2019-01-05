/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
/* App imports */
import Button from '../../components/button'
import Utils from '../../utils'
import * as style from './archive-pagination.module.less'

const ArchivePagination = ({ prevPage, nextPage }) => (
  <StaticQuery
    query={query}
    render={data => (
      <div className={style.container}>
        { prevPage ? 
          <Button to={Utils.resolvePageUrl(data.site.siteMetadata.pages.archive, prevPage)} buttonStyle={style.buttonLeft}>
            <FaArrowLeft /><span>Newer posts</span>
          </Button> : null
        }
        { nextPage ?
          <Button to={Utils.resolvePageUrl(data.site.siteMetadata.pages.archive, nextPage)} buttonStyle={style.buttonRight}>
            <span>Older posts</span><FaArrowRight />
          </Button> : null
        }
      </div>
    )}
  />
)

export default ArchivePagination;

ArchivePagination.propTypes = {
  prevPage: PropTypes.number,
  nextPage: PropTypes.number
}

const query = graphql`
{
  site {
    siteMetadata {
      pages {
        archive
      }
    }
  }
}
`