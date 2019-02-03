/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TumblrShareButton,
  RedditShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from 'react-share'
import { IconContext } from 'react-icons'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaPinterestSquare,
  FaTumblrSquare,
  FaRedditSquare,
  FaWhatsappSquare,
  FaEnvelopeSquare,
} from 'react-icons/fa'
import style from './share.module.less'

const Share = ({ pageCanonicalUrl, title, description, tags, coverUrl }) => (
  <div>
    <IconContext.Provider value={{ className: style.icon }}>
      <div className={style.container}>
        <FacebookShareButton url={pageCanonicalUrl}>
          <FaFacebookSquare color="#133783" />
        </FacebookShareButton>
        <TwitterShareButton url={pageCanonicalUrl} title={title}>
          <FaTwitterSquare color="#1da1f2" />
        </TwitterShareButton>
        <LinkedinShareButton
          url={pageCanonicalUrl}
          title={title}
          description={description}
        >
          <FaLinkedin color="#283e4a" />
        </LinkedinShareButton>
        <PinterestShareButton
          url={pageCanonicalUrl}
          media={coverUrl}
          description={description}
        >
          <FaPinterestSquare color="#e60023" />
        </PinterestShareButton>
        <TumblrShareButton
          url={pageCanonicalUrl}
          title={title}
          tags={tags}
          caption={description}
        >
          <FaTumblrSquare color="#36465d" />
        </TumblrShareButton>
        <RedditShareButton url={pageCanonicalUrl} title={title}>
          <FaRedditSquare color="#ff4500" />
        </RedditShareButton>
        <WhatsappShareButton
          url={pageCanonicalUrl}
          title={title}
          separator=" | "
        >
          <FaWhatsappSquare color="#01e675" />
        </WhatsappShareButton>
        <EmailShareButton url={pageCanonicalUrl} subject={title}>
          <FaEnvelopeSquare color="#333333" />
        </EmailShareButton>
      </div>
    </IconContext.Provider>
  </div>
)

Share.propTypes = {
  pageCanonicalUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  coverUrl: PropTypes.string.isRequired,
}

export default Share
