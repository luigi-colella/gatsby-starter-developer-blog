/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import * as style from './index.module.less'

const About = ({ data: { file } }) => {
  console.log(file)
  return (
    <Layout>
      <SEO
        title='About'
        description='A brief summary of this blog and my work'
        path='about'
      />
      <div className={style.container}>
        <div className={style.photo}>
          <Img fluid={file.childImageSharp.fluid} />
        </div>
        <div className={style.content}>
          <h1>Hi, I'm Luigi!</h1>
          <h2>Software Developer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus venenatis arcu, cursus pretium enim lacinia nec.
            Duis viverra sagittis neque. Fusce non luctus urna. Vivamus suscipit metus ac posuere egestas. Nunc a pulvinar purus.
            Vivamus nisi mi, fringilla quis lacus et, sagittis mollis massa. Cras tempus massa quis lobortis laoreet.
            Pellentesque metus odio, sagittis nec venenatis non, maximus congue eros. Suspendisse pellentesque purus sit amet ante commodo,
            et molestie mauris aliquet. Proin non nibh libero. Fusce at nulla euismod, condimentum augue quis, convallis justo.
          </p>
          <br />
          <p>
            Aenean eget sollicitudin dui. Pellentesque tempus urna metus, non convallis metus malesuada et.
            Donec dignissim nisl eget massa condimentum suscipit. Integer rhoncus turpis felis, ultrices rhoncus nunc lobortis a.
            Nunc feugiat eget ante in aliquet. Donec ut felis vitae nunc mollis gravida. Suspendisse dapibus, lectus eget placerat cursus, ante arcu consectetur velit, at posuere justo nulla ac quam.
            Sed sed feugiat lorem. Morbi velit elit, volutpat vitae scelerisque ac, faucibus sit amet quam. Vivamus dui nulla, sollicitudin
            a pellentesque ut, consequat sit amet quam.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  file (name: { eq: "profile-photo" }) {
    childImageSharp {
      fluid (maxWidth: 800) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default About