/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
/* App imports */
import Config from '../../../config'
import Utils from '../../utils'

function SEO({ title, description, path, lang, keywords, contentType, image, meta }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {

        const metaDescription = description
        const metaKeywords = (keywords && keywords.length > 0) ? { name: 'keywords', content: keywords.join(', ') } : []
        const pageUrl = Utils.resolvePageUrl(Config.siteUrl, Config.pathPrefix, path)
        const metaImageUrl = Utils.resolveUrl(Config.siteUrl, (image ? image.url : data.file.childImageSharp.fixed.src))
        const metaImageAlt = image ? image.alt : metaDescription

        return (
          <Helmet
            title={title} // Page title
            titleTemplate={`%s | ${Config.siteTitle}`}
            meta={[
              { name: 'description', content: metaDescription }, // Page description
              /* Open Graph */
              { property: 'og:title', content: title },
              { property: 'og:type', content: contentType || 'website' },
              { property: 'og:url', content: pageUrl },
              { property: 'og:description', content: metaDescription },
              { property: 'og:image', content: metaImageUrl },
              { property: 'og:image:alt', content: metaImageAlt },
              { property: 'og:site_name', content: Config.siteTitle },
              { property: 'og:locale', content: lang || 'en_US' },
              /* Twitter card */
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:title', content: title },
              { name: 'twitter:description', content: metaDescription },
              { name: 'twitter:image', content: metaImageUrl },
              { name: 'twitter:image:alt', content: metaImageAlt },
              { name: 'twitter:site', content: Config.author },
              { name: 'twitter:creator', content: Config.author }
            ]
              .concat(metaKeywords) // Keywords
              .concat(meta || []) // Other provided metadata
            }
            link={[
              { rel: 'canonical', href: pageUrl } // Canonical url
            ]}
          />
        )
      }}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  lang: PropTypes.string,
  contentType: PropTypes.oneOf(['article', 'website']),
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }),
  keywords: PropTypes.arrayOf(PropTypes.string),
  meta: PropTypes.arrayOf(PropTypes.shape({
    property: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })),
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    file (name: { eq: "facebook-logo" }) {
      childImageSharp {
        fixed (width: 500) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`
