const plugins = require('./gatsby-config.plugins');

module.exports = {
  siteMetadata: {
    title: 'Luigi Colella',
    description: 'Logbook of a software developer',
    author: 'lcolella',
    pages: {
      about: 'about',
      home: '/',
      archive: 'archive'
    },
    socials: {
      github: '',
      linkedin: ''
    }
  },
  plugins,
}
