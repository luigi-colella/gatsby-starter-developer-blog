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
      blog: 'blog',
      about: 'about',
      tag: 'tag',
      archive: 'archive'
    },
    postsForArchivePage: 3,
    social: {
      github: 'https://github.com/lgcolella',
      linkedin: '',
      rss: '/rss.xml'
    }
  },
  plugins,
}
