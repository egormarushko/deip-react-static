import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { m } from '../util/styles'

import { Logo, Link, Anchor } from './Menu'
import Icon from 'components/Icon'
import Button from 'components/Button'

const Toggler = styled.a`
  font-size: 24px;
  line-height: 60px;
  color: #fff;
  width: 60px;
  height: 60px;

  .open {
    display: inline-block;
  }

  .close {
    display: none;
  }

  ${m.greaterThan('medium')`
    display: none;
  `};
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  height: 60px;
  min-height: 60px;
`

const Nav = styled.div`
  display: none;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const Links = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 32px;
`

const opened = css`
  position: fixed;
  background: #fff;
  height: 100%;

  .open {
    display: none;
  }

  .close {
    display: inline-block;
  }

  ${Logo} {
    visibility: visible;
  }

  ${Nav} {
    display: flex;
  }

  ${Link}, ${Anchor}, ${Toggler} {
    color: inherit;
  }
`

const attached = css`
  position: fixed;
  background: #fff;
  box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.12);

  ${Logo} {
    visibility: visible;
  }

  ${Link}, ${Anchor}, ${Toggler} {
    color: inherit;
  }
`

const Root = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  flex-flow: column;
  width: 100%;
  top: 0;
  left: 0;
  ${p => (p.attached ? attached : '')};
  ${p => (p.opened ? opened : '')};

  ${m.greaterThan('medium')`
    display: none;
  `};

  ${Link}, ${Anchor} {
    margin: 16px 0;
  }

  ${Button} {
    width: 50%;
    margin-bottom: 32px;
  }
`

class MobileMenu extends Component {
  state = {
    opened: false,
    attached: false,
  }

  componentDidMount() {
    if (!this.props.attached) {
      document.addEventListener('scroll', this.handleScroll)
    } else {
      this.setState({ attached: true })
    }

    const ReactGA = require('react-ga');
    ReactGA.initialize('UA-114332532-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  componentWillUnmount() {
    if (!this.props.attached)
      document.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    const { attached } = this.state
    const { scrollY, innerHeight } = window

    if (scrollY >= innerHeight) {
      if (attached) return
      this.setState({ attached: true })
    } else {
      if (!attached) return
      this.setState({ attached: false })
    }
  }

  handleToggle = e => {
    e.preventDefault()
    this.setState({ opened: !this.state.opened })
  }

  handleClick = e => {
    this.setState({ opened: false })
  }

  render() {
    return (
      <Root {...this.state}>
        <Top>
          <Logo to="/">DEIP</Logo>
          <Toggler onClick={this.handleToggle}>
            <Icon className="open">bars</Icon>
            <Icon className="close">close</Icon>
          </Toggler>
        </Top>
        <Nav>
          <Links>
            <Anchor href="/#about" onClick={this.handleClick}>
              About us
            </Anchor>
            <Anchor href="/whitepaper" onClick={this.handleClick}>
              Whitepaper
            </Anchor>
            <Anchor href="/#roadmap" onClick={this.handleClick}>
              Roadmap
            </Anchor>
            <Anchor href="/#team" onClick={this.handleClick}>
              Team
            </Anchor>
            <Anchor href="/#advisors" onClick={this.handleClick}>
              Advisors
            </Anchor>
            {/* <Anchor href="/#researchers" onClick={this.handleClick}>
              Researches
            </Anchor> */}
          </Links>
          <Button primary to="/join" onClick={this.handleClick}>
            Join us
          </Button>
        </Nav>
      </Root>
    )
  }
}

MobileMenu.propTypes = {
  attached: PropTypes.bool,
}

export default MobileMenu
