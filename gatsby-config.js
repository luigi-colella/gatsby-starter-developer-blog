const plugins = require('./gatsby-config.plugins');

module.exports = {
  pathPrefix: '/gatsby-starter-blog', // Prefix for GitHub Pages deployment
  siteMetadata: {
    hostname: 'https://lgcolella.github.io',
    title: 'Luigi Colella',
    description: 'Logbook of a software developer',
    author: 'lcolella',
    pages: {
      home: '/',
      blog: 'blog/',
      tag: 'tag',
      about: 'about',
      archive: 'archive'
    },
    social: {
      github: 'https://github.com/lgcolella',
      linkedin: ''
    }
  },
  plugins,
}
