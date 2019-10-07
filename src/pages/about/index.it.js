/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import { aboutPropTypes, imageListPropTypes, iconsNameMap } from './index'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Utils from '../../utils'
import style from './index.module.less'

class About extends React.Component {
  static propTypes = aboutPropTypes

  render() {
    let { profilePhoto, flagEn, skillIcons, toolIcons } = this.props.data
    return (
      <Layout>
        <SEO
          title="About"
          description="Una breve presentazione di questo blog"
          path="about"
        />
        <div className={style.container}>
          <div className={style.photo}>
            <Img fluid={profilePhoto.childImageSharp.fluid} />
          </div>
          <div className={style.content}>
            <h1>Ciao, sono Luigi!</h1>
            <h2>Software Developer</h2>
            <p>For the English version click here</p>
            <a href={Utils.resolvePageUrl('../', '../', 'about')}>
              <Img
                fixed={flagEn.childImageSharp.fixed}
                style={{ display: 'block', margin: 'auto' }}
              />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              cursus venenatis arcu, cursus pretium enim lacinia nec. Duis
              viverra sagittis neque. Fusce non luctus urna. Vivamus suscipit
              metus ac posuere egestas. Nunc a pulvinar purus. Vivamus nisi mi,
              fringilla quis lacus et, sagittis mollis massa. Cras tempus massa
              quis lobortis laoreet. Pellentesque metus odio, sagittis nec
              venenatis non, maximus congue eros. Suspendisse pellentesque purus
              sit amet ante commodo, et molestie mauris aliquet. Proin non nibh
              libero. Fusce at nulla euismod, condimentum augue quis, convallis
              justo.
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
}

class ImageList extends React.Component {
  static propTypes = imageListPropTypes

  render = () => (
    <div className={style.iconsContainer}>
      {this.props.edges
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

export default About
