import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from 'components/Text'

const Root = styled.a`
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${p => p.theme.palette.primaryLight};
  text-align: left;
  text-decoration: none;
  padding: 24px 32px;
  transition: background 0.15s, border 0.15s;

  &:hover {
    background: ${p => p.theme.palette.background.primary};
    border: 1px solid ${p => p.theme.palette.primary};
  }

  p {
    margin: 0;
    width: 100%;
    transition: color 0.15s;
  }
`

const Language = ({ href, children, ...rest }) => (
  <Root href={href} {...rest}>
    <Text>{children}</Text>
  </Root>
)

Language.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Language
