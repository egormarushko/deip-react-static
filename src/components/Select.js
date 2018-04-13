import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { placeholder } from 'polished'

import icon from 'components/Icon'

const Root = styled.div`position: relative;`

const ph = p => placeholder({ color: p.theme.palette.text.secondary })

const p = styled.p`margin: 0;`

const HeaderInput = p.extend`
  padding-bottom: 10px;
`

const Comp = styled.select`
  background-color: white;
  border-radius: 5px;
  border: 1px solid ${p => p.theme.palette.primaryLight};
  font-size: 16px;
  color: 1px solid ${p => p.theme.palette.primary};
  line-height: 49px;
  padding: 0 48px 0 16px;
  width: 100%;
  min-width: 0;
  transition: border 0.15s;
  -webkit-appearance: none;
  -moz-appearance: none;

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
  line-height: 52px;
  right: 16px;
  pointer-events:none;
`

const Select = ({ icon, type, name, placeholder, required, header, options, ...rest }) => (
  <Root {...rest}>
    <HeaderInput>{header}</HeaderInput>
    <Comp type={type} name={name} placeholder={placeholder} required = {required}>
      {
        options.map((amount, i) =>
          <option key={i} value={amount}>{amount}</option>
        )
      }
    </Comp>
    <Icon>{icon}</Icon>
  </Root>
)

Select.propTypes = {
  icon: PropTypes.string.isRequired,
}

export default Select
