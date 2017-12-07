import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { placeholder } from 'polished'

import icon from 'components/Icon'

const Root = styled.div`position: relative;`

const ph = p => placeholder({ color: p.theme.palette.text.secondary })

const Comp = styled.input`
  border-radius: 5px;
  border: 1px solid ${p => p.theme.palette.primaryLight};
  font-size: 16px;
  color: 1px solid ${p => p.theme.palette.primary};
  line-height: 49px;
  padding: 0 48px 0 16px;
  width: 100%;
  min-width: 0;
  transition: border 0.15s;

  ${ph};

  & + i {
    color: ${p => p.theme.palette.primaryLight};
    transition: color 0.15s;
  }

  &:focus {
    outline: none;
    border: 1px solid ${p => p.theme.palette.primary};
  }

  &:focus + i {
    color: ${p => p.theme.palette.primary};
  }
`

const Icon = styled(icon)`
  position: absolute;
  font-size: 18px;
  line-height: 49px;
  top: 2px;
  right: 16px;
`

const Input = ({ icon, type, name, placeholder, ...rest }) => (
  <Root {...rest}>
    <Comp type={type} name={name} placeholder={placeholder} />
    <Icon>{icon}</Icon>
  </Root>
)

Input.propTypes = {
  icon: PropTypes.string.isRequired,
}

export default Input
