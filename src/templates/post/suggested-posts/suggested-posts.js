/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
/* App imports */
import PostList from '../../../components/post-list'
import * as style from './suggested-posts.module.less'

const SuggestedPosts = ({ posts, tagPagePath }) => (
  <div className={style.container}>
    <h3>Did you like it? Why don't you try also...</h3>
    <PostList posts={posts} tagPagePath={tagPagePath} mosaicView={true} />
  </div>
)

export default SuggestedPosts;

SuggestedPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    edge: PropTypes.shape({
      node: PropTypes.object
    })
  })).isRequired,
  tagPagePath: PropTypes.string.isRequired
}