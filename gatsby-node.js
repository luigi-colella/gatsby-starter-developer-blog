/* Vendor imports */
const path = require('path');
/* App imports */
const config = require('./config');
const utils = require('./src/utils');

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
            fileAbsolutePath
          }
        }
      }
    }    
  `).then(result => {
    if (result.errors) return Promise.reject(result.errors);

    const { site, allMarkdownRemark } = result.data

    /* Post pages */
    allMarkdownRemark.edges.forEach(({ node }) => {
      // Check path prefix of post
      if (node.frontmatter.path.indexOf(config.pages.blog) !== 0) throw `Invalid path prefix: ${node.frontmatter.path}`
      
      createPage({
        path: node.frontmatter.path,
        component: path.resolve('src/templates/post/post.js'),
        context: {
          postPath: node.frontmatter.path,
          translations: utils.getRelatedTranslations(node, allMarkdownRemark.edges)
        }
      })
    })

    const regexForIndex = /index\.md$/
    // Posts in default language, excluded the translated versions
    const defaultPosts = allMarkdownRemark.edges.filter(({ node: { fileAbsolutePath } }) => fileAbsolutePath.match(regexForIndex))

    /* Tag pages */
    const allTags = [];
    defaultPosts.forEach(({ node }) => {
      node.frontmatter.tags.forEach(tag => {
        if (allTags.indexOf(tag) === -1) allTags.push(tag)
      })
    })

    allTags
    .forEach(tag => {
      createPage({
        path: utils.resolvePageUrl(config.pages.tag, tag),
        component: path.resolve('src/templates/tag/tag.js'),
        context: {
          tag: tag
        }
      })
    })

    /* Archive pages */
    const postsForPage = config.postsForArchivePage;
    const archivePages = Math.ceil(defaultPosts.length / postsForPage);
    for (let i = 0; i < archivePages; i++) {

      let posts = defaultPosts.slice(i * postsForPage, i * postsForPage + postsForPage);
      let archivePage = i + 1;

      createPage({
        path: utils.resolvePageUrl(config.pages.archive, archivePage),
        component: path.resolve('src/templates/archive/archive.js'),
        context: {
          postPaths: posts.map(edge => edge.node.frontmatter.path),
          archivePage: archivePage,
          lastArchivePage: archivePages
        }
      })

    }

  })

}
