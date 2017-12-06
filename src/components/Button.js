import React from 'react'
import PropTypes from 'prop-types'
import { Link as link } from 'react-static'
import styled, { css } from 'styled-components'
import { darken, transparentize } from 'polished'

const primary = css`
  background: ${p => p.theme.palette.accent};
  color: #fff;
  transition: background 0.15s;

  &:hover {
    background: ${p => darken(0.1, p.theme.palette.accent)};
  }
`

const secondary = css`
  border: 1px solid ${p => p.theme.palette.primaryLight};
  color: ${p => p.theme.palette.primaryLight};
  transition: border 0.15s, color 0.15s;

  &:hover {
    border: 1px solid ${p => p.theme.palette.primary};
    color: ${p => p.theme.palette.primary};
  }
`

const contrast = css`
  border: 1px solid #fff;
  color: #fff;
`

const Root = styled(link)`
  border-radius: 5px;
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  height: 49px;
  line-height: 49px;
  min-width: 186px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  ${p => (p.primary ? primary : p.contrast ? contrast : secondary)};
`

const RootAnchor = Root.withComponent('a')

Root.propTypes = {
  to: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  contrast: PropTypes.bool,
  children: PropTypes.node,
}

const Button = ({ href, to, primary, constrast, children }) => {
  if (href) {
    return (
      <RootAnchor
        href={href}
        primary={primary}
        contrast={contrast}
        children={children}
      />
    )
  }

  return (
    <RootAnchor
      href={href}
      primary={primary}
      contrast={contrast}
      children={children}
    />
  )
}

export default Root
