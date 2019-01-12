const config = require('./config');
const plugins = require('./gatsby-config.plugins');

module.exports = {
  pathPrefix: config.pathPrefix, // Prefix for GitHub Pages deployment
  siteMetadata: {
    siteUrl: config.siteUrl // Needed for `gatsby-plugin-sitemap`
  },
  plugins,
}
