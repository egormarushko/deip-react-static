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

const common = css`
  border: 0px solid transparent;
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

const Link = styled(link)`${common};`
const Anchor = styled.a`${common};`
const Submit = styled.button`${common};`

const Button = ({ href, to, submit, primary, constrast, ...rest }) => {
  if (submit) {
    return <Submit primary={primary} contrast={contrast} {...rest} />
  }

  if (href) {
    return (
      <Anchor href={href} primary={primary} contrast={contrast} {...rest} />
    )
  }

  return <Link to={to} primary={primary} contrast={contrast} {...rest} />
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  submit: PropTypes.bool,
  primary: PropTypes.bool,
  contrast: PropTypes.bool,
  children: PropTypes.node,
}

export default styled(Button)`

`
