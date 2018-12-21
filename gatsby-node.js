/* Vendor imports */
const path = require('path');
/* App imports */
const Constants = require('./src/constants');

exports.createPages = ({ actions, graphql }) => {

  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
          }
        }
      }
    }    
  `).then(result => {
    if (result.errors) return Promise.reject(result.errors);

    /* Post pages */
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve('src/templates/post/post.js'),
        context: {
          postPath: node.frontmatter.path
        }
      })
    })

    /* Tag pages */
    const allTags = [];
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      node.frontmatter.tags.forEach(tag => {
        if (allTags.indexOf(tag) === -1) allTags.push(tag)
      })
    })

    allTags.forEach(tag => {
      createPage({
        path: Constants.pages.tag + '/' + tag,
        component: path.resolve('src/templates/tag/tag.js'),
        context: {
          tag: tag
        }
      })
    })

  })

}
