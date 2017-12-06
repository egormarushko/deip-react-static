import React from 'react'
import styled from 'styled-components'
import { placeholder } from 'polished'

const TextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid ${p => p.theme.palette.primaryLight};
  font-size: 16px;
  color: 1px solid ${p => p.theme.palette.primary};
  padding: 16px;
  width: 100%;
  min-width: 0;
  transition: border 0.15s;

  &:focus {
    outline: none;
    border: 1px solid ${p => p.theme.palette.primary};
  }

  &::placeholder {
    font-family: Roboto, sans-serif;
    color: ${p => p.theme.palette.text.secondary};
  }
`

export default TextArea
