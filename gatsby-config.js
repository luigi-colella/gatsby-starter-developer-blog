const plugins = require('./gatsby-config.plugins');

module.exports = {
  pathPrefix: '/PersonalSite', // Prefix for GitHub Pages deployment
  siteMetadata: {
    title: 'Luigi Colella',
    description: 'Logbook of a software developer',
    author: 'lcolella'
  },
  plugins,
}
