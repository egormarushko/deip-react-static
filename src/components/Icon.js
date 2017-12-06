import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const modular = value => value * 8 + 'px'

const margins = p => css`
  margin-left: ${p => (p.ml ? modular(p.ml) : '0')};
  margin-right: ${p => (p.mr ? modular(p.mr) : '0')};
`

const Root = styled.i`
  font-size: ${p => (p.size ? p.size + 'px' : 'inherit')};
  ${margins};
`

const Icon = ({ className, children, ...rest }) => {
  let cn = `fa fa-${children}`
  if (className) {
    cn = `${cn} ${className}`
  }

  return <Root className={cn} {...rest} />
}

Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  children: PropTypes.string.isRequired,
}

export default Icon
