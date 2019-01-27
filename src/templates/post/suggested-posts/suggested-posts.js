/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
/* App imports */
import PostList from '../../../components/post-list'
import * as style from './suggested-posts.module.less'

const SuggestedPosts = ({ posts }) => (
  <div>
    <p className={style.title}>Did you like it? Why don't you try also...</p>
    <PostList posts={posts} />
  </div>
)

export default SuggestedPosts;

SuggestedPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    edge: PropTypes.shape({
      node: PropTypes.object
    })
  })).isRequired,
}