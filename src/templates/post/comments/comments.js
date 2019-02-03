/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
/* App imports */
import Config from '../../../../config'
import style from './comments.module.less'

class Comments extends React.Component {
  componentDidMount() {
    const { pageCanonicalUrl, pageId } = this.props

    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function() {
          this.page.url = pageCanonicalUrl
          this.page.identifier = pageId
        },
      })
    } else {
      window.disqus_config = function() {
        this.page.url = pageCanonicalUrl
        this.page.identifier = pageId
      }
      ;(function() {
        var d = document,
          s = d.createElement('script')
        s.src = Config.disqusScript
        s.setAttribute('data-timestamp', +new Date())
        ;(d.head || d.body).appendChild(s)
      })()
    }
  }

  render = () => (
    <div className={style.container}>
      <div id="disqus_thread" />
    </div>
  )
}

Comments.propTypes = {
  pageCanonicalUrl: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
}

export default Comments
