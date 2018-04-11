import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { placeholder } from 'polished'
import Text from 'components/Text'

import icon from 'components/Icon'

const Root = styled.div`position: relative;`

const ph = p => placeholder({ color: p.theme.palette.text.secondary })

const p = styled.p`margin: 0;`

const HeaderInput = p.extend`
  padding-bottom: 10px;
`

const Comp = styled.input`
  border-radius: 5px;
  border: 1px solid ${p => p.theme.palette.primaryLight};
  font-size: 16px;
  color: 1px solid ${p => p.theme.palette.primary};
  line-height: 49px;
  padding: 0 0px 0 16px;
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

const InputFull = ({ type, name, placeholder, header, ...rest }) => (
  <Root {...rest}>
    <HeaderInput>{header}</HeaderInput>
    <Comp type={type} name={name} placeholder={placeholder} />
  </Root>
)

export default InputFull