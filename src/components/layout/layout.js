/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
/* App imports */
import Header from './header'
import Footer from './footer'
import '../../style/global.less'
import style from './layout.module.less'

const Layout = ({ children, title }) => (
  <>
    <Header />
    <div className={style.container}>
      {title ? (
        <div className={style.title}>
          <h1>{title}</h1>
        </div>
      ) : null}
      {children}
    </div>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: '',
}

export default Layout
