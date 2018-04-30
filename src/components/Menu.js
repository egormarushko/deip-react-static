import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link as link } from 'react-static'
import styled, { css } from 'styled-components'
import { m, container } from '../util/styles'

import Button from 'components/Button'

export const Logo = styled(link)`
  visibility: hidden;
  font-weight: 700;
  font-size: 32px;
  text-decoration: none;
  color: ${p => p.theme.palette.text.primary};
`

export const Link = styled(link)`
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 32px;
  }
`

export const Anchor = Link.withComponent('a')

const Nav = styled.div``

const attached = css`
  position: fixed;
  background: #fff;
  box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.12);

  ${Logo} {
    visibility: visible;
  }
  ${Link}, ${Anchor} {
    color: ${p => p.theme.palette.primaryLight};
  }
`

const Root = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  ${p => (p.attached ? attached : '')};

  ${m.lessThan('medium')`
    display: none;
  `};
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 48px;
`

class Menu extends Component {
  state = {
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

  render() {
    const { attached } = this.state
    return (
      <Root attached={attached}>
        <Content>
          <Logo to="/">DEIP</Logo>
          <Nav>
            <Anchor href="/#about">About us</Anchor>
            <Anchor href="/whitepaper">Whitepaper</Anchor>
            <Anchor href="/#roadmap">Roadmap</Anchor>
            <Anchor href="/#team">Team</Anchor>
            <Anchor href="/#advisors">Advisors</Anchor>
            <Anchor href="/#partners">Partners</Anchor>
            <Anchor href="/presale">Pre-sale</Anchor>
            {/* <Anchor href="/#researchers">Researches</Anchor> */}
            {attached ? (
              <Button primary to="/join">
                Join us
              </Button>
            ) : (
              <Link to="/join">Join us</Link>
            )}
          </Nav>
        </Content>
      </Root>
    )
  }
}

Menu.propTypes = {
  attached: PropTypes.bool,
}

export default Menu
