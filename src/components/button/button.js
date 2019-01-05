/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
/* App imports */
import * as style from './button.module.less'

const Button = ({ children, to, buttonStyle }) => (
  <Link to={to} className={`${style.button} ${buttonStyle}`}>{children}</Link>
)

export default Button

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string
}

Button.defaultProps = {
  buttonStyle: ''
}