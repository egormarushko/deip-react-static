import React from "react"
import PropTypes from "prop-types"
import jsonp from "jsonp"

import styled, { css } from 'styled-components'
import send from './images/icon_send.svg'

const Root = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 30px;
  border: 1px solid #fff;
`

const Icon = styled.img`
  display: block;
  width: 42px;
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

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

class SubscribeForm extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      inputValue: '',
      status: null,
      msg: null
    }
    this.focusTextInput = this.focusTextInput.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const { value } = e.target;
    this.setState({
      inputValue: value
    });
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  onSubmit = e => {
    var input = this.refs.myInput;
    var input2 = this.refs.myInputButton;
    
    e.preventDefault()
    debugger
    if (!this.state.inputValue || this.state.inputValue.length < 5 || this.state.inputValue.indexOf("@") === -1) {
      
      this.setState({
        status: "error"
      })
      return
    }
    const url = getAjaxUrl(this.props.action) + `&EMAIL=${encodeURIComponent(this.state.inputValue)}`;
    this.setState(
      {
        status: "sending",
        msg: null
      }, () => jsonp(url, {
        param: "c"
      }, (err, data) => {
        if (err) {
          this.setState({
            status: 'error',
            msg: err
          })
        } else if (data.result !== 'success') {
          this.setState({
            status: 'error',
            msg: data.msg
          })
        } else {
          this.setState({
            status: 'success',
            msg: data.msg
          })
        }
      })
    )
  }
  render() {
    const { inputValue } = this.state;
    const { action, messages, className, style, styles } = this.props
    const { status, msg } = this.state
    return (
      <div className={className} style={style}>
        <form action={action} method="post" noValidate>
        <Root>
            <InputComp 
              onChange={this.onInputChange}
              ref="myInput"
              type="email"
              defaultValue=""
              name="EMAIL"
              required={true}
              value={inputValue}
              placeholder={messages.inputPlaceholder}
            />
            <Submit
              ref="myInputButton"
              disabled={this.state.status === "sending" || this.state.status === "success"}
              onClick={this.onSubmit}
              type="submit"
            >
              <Icon src={send} />
              {messages.btnLabel}
            </Submit>
            </Root>
          {status === "sending" && <p style={styles.sending} dangerouslySetInnerHTML={{ __html: messages.sending }} />}
          {status === "success" && <p style={styles.success} dangerouslySetInnerHTML={{ __html: messages.success || msg }} />}
          {status === "error" && <p style={styles.error} dangerouslySetInnerHTML={{ __html: messages.error || msg }} />}
        </form>
      </div>
    )
  }
}

export default SubscribeForm