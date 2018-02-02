import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import send from './images/icon_send.svg'
import SubscribeForm from 'components/SubscribeForm'

const Root = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 30px;
  border: 1px solid #fff;
`

const Submit = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  margin-right: 9px;
  transition: opacity 0.3s;
  opacity: 0.6;
`

const InputComp = styled.input`
  border: none;
  background: transparent;
  font-size: 16px;
  line-height: 60px;
  color: #fff;
  width: 100%;
  min-width: 0;
  margin: 0 16px 0 30px;

  &:focus {
    outline: none;
  }

  &:focus ~ button {
    opacity: 1;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const Icon = styled.img`
  display: block;
  width: 42px;
`

const formProps = {
  action: 'https://world.us17.list-manage.com/subscribe/post?u=8ad780176f7d9c1b8d56e5152&amp;id=31341d1292',
  messages: {
    inputPlaceholder: "Enter your email",
    sending: "Sending...",
    success: "Thank you! Now check your e-mail.",
    error: "Try again"
  },
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "green"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
}

const Input = () => (
    <SubscribeForm {...formProps}/>
)

export default Input
