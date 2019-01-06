/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
/* App imports */
import * as style from './comments.module.less'

class Comments extends React.Component {

  componentDidMount () {
    const { pageCanonicalUrl, pageId } = this.props;
    
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {  
          this.page.url = pageCanonicalUrl;
          this.page.identifier = pageId;
        }
      });
    } else {
      window.disqus_config = function () {
        this.page.url = pageCanonicalUrl;
        this.page.identifier = pageId;
      };  
      (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://luigi-colella.disqus.com/embed.js';
        s.setAttribute('data-timestamp', + new Date());
        (d.head || d.body).appendChild(s);
      })();
    }
  }

  render = () => (
    <div className={style.container}>
      <div id="disqus_thread"></div>
    </div>
  )
  
}

Comments.propTypes = {
  pageCanonicalUrl: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired
}

export default Comments;
