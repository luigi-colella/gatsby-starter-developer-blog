
const Utils = {
  resolveUrl: (...paths) => {
    return paths.reduce((resolvedUrl, path) => {
        let urlPath = path.trim()
        if (urlPath) resolvedUrl += (resolvedUrl === '' ? '' : '/') + urlPath.replace(/^\/|\/$/g, '')
        return resolvedUrl;
    }, '')
  },
  resolvePageUrl: (...path) => {
    let resolvedUrl = Utils.resolveUrl(...path);
    // Cause of Gatsby.js' folder structure, add a trailing slash to prevent 301 redirects
    return resolvedUrl + '/'
  },
  /**
   * Get an ordered list of suggested posts for a single post.
   * @param {Object} post The single post of which to find the related posts. It's the returned object from Graphql's query `markdownRemark`
   * @param {Array} postList The list where find related posts. It's the returned object from Graphql's query `allMarkdownRemark`
   * @param {number} limit The maximum number of suggested posts to get
   * @return {Array} The `postList` object sorted according to the best match with the `post` object
   */
  getSuggestedPosts: (post, postList, limit) => {

    // Get the number of common tags with provided post.
    let getTagScore = (edge) => {
      let commonTags = 0;
      edge.node.frontmatter.tags.forEach(tag => {
        commonTags += (post.frontmatter.tags.indexOf(tag) !== -1 ? 1 : 0 );
      })
      return commonTags;
    }

    return postList.edges
      .sort((edgeA, edgeB) => {
        return getTagScore(edgeB) - getTagScore(edgeA);
      })
      .slice(0, limit);
  }
}

module.exports = Utils;