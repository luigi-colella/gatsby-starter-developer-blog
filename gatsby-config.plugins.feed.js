const Utils = require('./src/utils');

module.exports = {
  resolve: `gatsby-plugin-feed`,
  options: {
    query: `
      {
        site {
          pathPrefix
          siteMetadata {
            hostname
            title
            description
            author
          }
        }
      }
    `,
    feeds: [
      {
        serialize: ({ query: { site, allMarkdownRemark } }) => {
          return allMarkdownRemark.edges.map(({ node }) => {
            const { hostname, author } = site.siteMetadata
            const { title, date, path } = node.frontmatter
            return Object.assign({}, node.frontmatter, {
              title: title,
              description: node.excerpt,
              url: Utils.resolveUrl(hostname, site.pathPrefix, path),
              guid: hostname + path + title,
              date: date,
              author: author,
              custom_elements: [
                { "content:encoded": node.html }
              ],
            })
          })
        },
        query: `
          {
            allMarkdownRemark(
              limit: 10,
              sort: { order: DESC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  excerpt
                  html
                  frontmatter {
                    title
                    date
                    path
                  }
                }
              }
            }
          }
        `,
        output: "/rss.xml",
        title: "Luigi Colella RSS Feed",
      },
    ],
  },
}