import React from 'react'
import styled from 'styled-components'
import { m } from '../util/styles'

const Logo = styled.h1`
  font-weight: 400;
  font-size: 182px;
  letter-spacing: 12px;
  color: #fff;
  margin: 0;

  ${m.lessThan('small')`
    font-size: 96px;
    letter-spacing: 9px;
  `};
`

export default Logo
