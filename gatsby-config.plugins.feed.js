const config = require('./config');
const utils = require('./src/utils');

module.exports = {
  resolve: `gatsby-plugin-feed`,
  options: {
    feeds: [
      {
        serialize: () => {
          return allMarkdownRemark.edges.map(({ node }) => {
            const { siteUrl, author } = config
            const { title, date, path } = node.frontmatter
            return Object.assign({}, node.frontmatter, {
              title: title,
              description: node.excerpt,
              url: utils.resolveUrl(siteUrl, site.pathPrefix, path),
              guid: siteUrl + path + title,
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