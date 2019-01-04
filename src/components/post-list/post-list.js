/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import * as style from './post-list.module.less'
import TagList from '../tag-list'
import Utils from '../../utils'

const PostList = ({ posts, tagPagePath, highlightFirstItem, mosaicView }) => (
  <div className={mosaicView ? style.containerMosaic : null}>
    {posts.map((post, index) => {
      
      const { title, date, path, tags, cover } = post.node.frontmatter
      const { excerpt } = post.node
      /* Style classes */
      const postStyle = mosaicView ? style.postMosaic : style.post
      let coverStyle;
      if (highlightFirstItem && index === 0) {
        coverStyle = style.coverHighlighted;
      } else if (mosaicView) {
        coverStyle = style.coverMosaic;
      } else {
        coverStyle = style.cover;
      }
      const contentStyle = mosaicView ? style.contentMosaic : style.content;
      /* * */
      
      return (
        <div key={title} className={postStyle}>
          <div className={coverStyle}>
            <Link to={Utils.resolvePageUrl(path)}><Img fluid={cover.childImageSharp.fluid} /></Link>
          </div>
          <div className={contentStyle}>
            <Link to={Utils.resolvePageUrl(path)}>
              <label>{date}</label>
              <h2>{title}</h2>
              <p>{excerpt}</p>
            </Link>
            <TagList tags={tags} tagPagePath={tagPagePath}/>
          </div>
        </div>
      )
    })}
  </div>
)

export default PostList;

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        cover: PropTypes.shape({
          fixed: PropTypes.object,
          fluid: PropTypes.object
        }).isRequired
      })
    })
  })),
  tagPagePath: PropTypes.string.isRequired,
  highlightFirstItem: PropTypes.bool,
  mosaicView: PropTypes.bool
}