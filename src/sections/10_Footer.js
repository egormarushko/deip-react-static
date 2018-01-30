import React from 'react'
import styled from 'styled-components'
import { m } from '../util/styles'

import { Root } from './04_Team'
import icon from 'components/Icon'

const Container = styled.div`
  display: flex;
  padding: 16px 32px 16px 32px;

  ${m.lessThan('medium')`
    flex-flow: column;
  `};
`

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: ${100 * 6 / 12}%;
  margin-left: ${100 * 3 / 12}%;

  ${m.lessThan('medium')`
    width: 100%;
    margin: 0 0 16px 0;
  `};
`

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: ${100 * 3 / 12}%;

  ${m.lessThan('medium')`
    justify-content: center;
    width: 100%;
  `};
`

const Copyright = styled.p`
  font-size: 16px;
  color: ${p => p.theme.palette.text.secondary};
  margin: 0;
`

const Icon = styled(icon)`
  font-size: 24px;
  color: ${p => p.theme.palette.primary};
`

const Link = styled.a`margin: 16px;`

const Footer = p => (
  <Root {...p}>
    <Container>
      <Block>
        <Link href="https://gitlab.com/DEIP">
          <Icon>gitlab</Icon>
        </Link>
        <Link href="https://t.me/deip_world">
          <Icon>telegram</Icon>
        </Link>
        <Link href="https://deipteam.slack.com/messages">
          <Icon>slack</Icon>
        </Link>
        <Link href="https://medium.com/deip">
          <Icon>medium</Icon>
        </Link>
        <Link href="https://twitter.com/@DEIP_World">
          <Icon>twitter</Icon>
        </Link>
        <Link href="https://www.instagram.com/deip.world/">
          <Icon>instagram</Icon>
        </Link>
        <Link href="https://www.facebook.com/DEIPword/">
          <Icon>facebook</Icon>
        </Link>
        <Link href="mailto:team@deip.world">
          <Icon>envelope</Icon>
        </Link>
      </Block>
      <Wrap>
        <Copyright>© DEIP, {new Date().getFullYear()}</Copyright>
      </Wrap>
    </Container>
  </Root>
)

export default Footer
