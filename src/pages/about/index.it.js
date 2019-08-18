/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Utils from '../../utils'
import * as style from './index.module.less'

const About = ({ data: { profilePhoto, flagEn, skillIcons, toolIcons } }) => {
  return (
    <Layout>
      <SEO
        title="About"
        description="A brief summary of this blog and my work"
        path="about"
      />
      <div className={style.container}>
        <div className={style.photo}>
          <Img fluid={profilePhoto.childImageSharp.fluid} />
        </div>
        <div className={style.content}>
          <h1>Ciao, sono Luigi!</h1>
          <h2>Software Developer</h2>
          <p>For the English version click here
            <div>
              <a href={Utils.resolvePageUrl('../', '../', 'about')}>
                <Img fixed={flagEn.childImageSharp.fixed} />
              </a>
            </div>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            cursus venenatis arcu, cursus pretium enim lacinia nec. Duis viverra
            sagittis neque. Fusce non luctus urna. Vivamus suscipit metus ac
            posuere egestas. Nunc a pulvinar purus. Vivamus nisi mi, fringilla
            quis lacus et, sagittis mollis massa. Cras tempus massa quis
            lobortis laoreet. Pellentesque metus odio, sagittis nec venenatis
            non, maximus congue eros. Suspendisse pellentesque purus sit amet
            ante commodo, et molestie mauris aliquet. Proin non nibh libero.
            Fusce at nulla euismod, condimentum augue quis, convallis justo.
          </p>
          <br />
          <h2>Competenze</h2>
          <ImageList edges={skillIcons.edges} />
          <h2>Strumenti</h2>
          <ImageList edges={toolIcons.edges} />
        </div>
      </div>
    </Layout>
  )
}

About.propTypes = {
  data: PropTypes.shape({
    profilePhoto: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    flagEn: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    skillIcons: PropTypes.object.isRequired,
    toolIcons: PropTypes.object.isRequired,
  }),
}

const ImageList = ({ edges }) => (
  <div className={style.iconsContainer}>
    {edges
      .sort((edgeA, edgeB) =>
        edgeA.node.name.toLowerCase() > edgeB.node.name.toLowerCase() ? 1 : -1
      )
      .map(({ node: { name, childImageSharp } }) => (
        <div className={style.iconWrapper} key={name}>
          <Img
            fixed={childImageSharp.fixed}
            alt={name + ' logo'}
            title={name}
          />
          <label>
            {iconsNameMap[name] ? iconsNameMap[name] : Utils.capitalize(name)}
          </label>
        </div>
      ))}
  </div>
)

ImageList.propTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        name: PropTypes.string.isRequired,
        childImageSharp: PropTypes.shape({
          fixed: PropTypes.object.isRequired,
        }).isRequired,
      }).isRequired,
    })
  ).isRequired,
}

export const query = graphql`
  {
    profilePhoto: file(name: { eq: "profile-photo" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    flagEn: file(name: { eq: "flag-en" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    skillIcons: allFile(filter: { dir: { regex: "/about/skills$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
    toolIcons: allFile(filter: { dir: { regex: "/about/tools$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
// Use to set specific icons names
const iconsNameMap = {
  css: 'CSS',
  html: 'HTML',
  jquery: 'JQuery',
  nodejs: 'Node.js',
  vuejs: 'Vue.js',
  gruntjs: 'Grunt.js',
}

export default About
