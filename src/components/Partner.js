import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.a`
  opacity: 0.3;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`

const Img = styled.img`width: 100%;`

const Partner = ({ src, href , ...rest}) => (
    <Root href={href} {...rest}>
    <Img src={src} />
  </Root>
)

Partner.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default Partner
