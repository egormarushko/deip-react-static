import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { m, container } from '../util/styles'

import Menu from 'components/Menu'
import MobileMenu from 'components/MobileMenu'
import HeroBackground from 'components/HeroBackground'
import Logo from 'components/Logo'
import Button from 'components/Button'

const Root = styled.section`
  position: relative;
  text-align: center;
  height: 100vh;
`

const Container = styled.div`
  ${container};
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5vh;
  height: 100vh;
`

const Description = styled.p`
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 2.16px;
  color: #fff;
  margin: 0;

  ${m.lessThan('small')`
    font-size: 16px;
    letter-spacing: 0;
  `};
`

const ButtonsLine = styled.div`
  text-align: center;
  margin-top: 50px;

  ${m.lessThan('small')`
    display: flex;
    flex-flow: column;
  `};

  ${Button} {
    ${m.greaterThan('small')`
      margin: 0 16px 16px 16px;
    `};

    ${m.lessThan('small')`
      width: 225px;
      margin-bottom: 16px;
    `};
  }
`

const Hero = () => (
  <Root>
    <HeroBackground />
    <Menu />
    <MobileMenu />
    <Container>
      <Logo>DEIP</Logo>
      <Description>decentralized scientific platform</Description>
      <ButtonsLine>
        <Button primary to="/join">
          join us
        </Button>
        <Button contrast to="/whitepaper">
          white paper
        </Button>
      </ButtonsLine>
    </Container>
  </Root>
)

export default Hero
