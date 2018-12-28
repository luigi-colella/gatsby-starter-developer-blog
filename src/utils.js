
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
  }
}

module.exports = Utils;