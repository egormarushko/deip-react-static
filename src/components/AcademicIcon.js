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

const AcademicIcon = ({ className, children, ...rest }) => {
  let cn = `ai ai-${children}`
  if (className) {
    cn = `${cn} ${className}`
  }

  return <Root className={cn} {...rest} />
}

AcademicIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  children: PropTypes.string.isRequired,
}

export default AcademicIcon
