import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from 'components/Icon'

const Root = styled.div``

const Radio = styled.input.attrs({
  type: 'radio',
})`
  display: none;

  &:checked + label {
    border: 1px solid ${p => p.theme.palette.primary};
    background: ${p => p.theme.palette.primary};
    color: #fff;
  }
`

const Label = styled.label`
  display: inline-block;
  border-radius: 5px;
  border: 1px solid ${p => p.theme.palette.primaryLight};
  font-size: 16px;
  font-weight: 700;
  color: ${p => p.theme.palette.primaryLight};
  height: 49px;
  line-height: 49px;
  width: 100%;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: border 0.15s, background 0.15s, color 0.15s;
`

const RadioButton = ({
  id,
  name,
  icon,
  checked,
  children,
  onClick,
  ...rest
}) => (
  <Root {...rest}>
    <Radio id={id} name={name} defaultChecked={checked} onClick={onClick} />
    <Label htmlFor={id}>
      <Icon size={18} mr={1}>
        {icon}
      </Icon>
      {children}
    </Label>
  </Root>
)

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default RadioButton
