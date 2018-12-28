
module.exports = [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Luigi Colella Blog',
        short_name: 'Luigi Colella',
        start_url: '/',
        background_color: '#0C2744',
        theme_color: '#0C2744',
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
        legacy: true, // this will add apple-touch-icon links to <head>. Required for versions prior to iOS 11.3.
      },
    },
    'gatsby-plugin-less',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs'
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
]