import React from 'react'
import styled from 'styled-components'
import { m, container } from '../util/styles'

import { Container as c } from './04_Team'
import Heading from 'components/Heading'
import partner from 'components/Partner'

const ph = 'https://via.placeholder.com/350x150?text=Partner'

const Bg = styled.div`background: ${p => p.theme.palette.background.primary};`

const Root = styled.section`
  ${container};
  padding: 64px 0;
`

const Container = c.extend`
  margin-top: 0;
  margin-bottom: 0;

  ${m.lessThan('small')`
    margin: 0;
  `};
`

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-left: -16px;
  margin-right: -16px;
`

const Partner = styled(partner)`
  width: calc(100% / 3 - 32px);
  margin: 16px;
  ${m.lessThan('small')`
    width: calc(100% / 2 - 32px);
  `};
`

const Partners = p => (
  <Bg>
    <Root {...p}>
      <Container>
        <Heading>Our partners</Heading>
        <Heading type="sub">Change me</Heading>
        <Block>
          <Partner src={ph} href="#" />
          <Partner src={ph} href="#" />
          <Partner src={ph} href="#" />
          <Partner src={ph} href="#" />
          <Partner src={ph} href="#" />
        </Block>
      </Container>
    </Root>
  </Bg>
)

export default Partners
