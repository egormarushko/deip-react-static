import React from 'react'
import PropTypes from 'prop-types'

export const Shower = ({ value, children }) => (
  <div>
    {React.Children.map(
      children,
      child => (child.props.value == value ? child : null),
    )}
  </div>
)

Shower.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export const Show = ({ value, children }) => <div>{children}</div>

Show.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
