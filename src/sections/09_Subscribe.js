import React from 'react'
import styled from 'styled-components'
import { m, container } from '../util/styles'

import { Container as c } from './04_Team'
import Heading from 'components/Heading'
import SubscribeInput from 'components/SubscribeInput'

const Bg = styled.div`
  background: linear-gradient(167.13deg, #331d50 24.88%, #247fad 99.11%);
`

const Root = styled.section`
  ${container};
  padding: 64px 0;
  h1 {
    color: #fff;
  }
`

const Container = c.extend`
  margin-top: 0;
  margin-bottom: 0;

  ${m.lessThan('small')`
    margin: 0;
  `};
`

const Small = styled.p`
  font-weight: 700;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  margin: 0 0 4px 0;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`

const Subscribe = p => (
  <Bg>
    <Root {...p}>
      <Container>
        <Small>The last news and releases</Small>
        <Heading>Subscribe on DEIP</Heading>
        <Form method="post" action="/subscribe">
          <SubscribeInput
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </Form>
      </Container>
    </Root>
  </Bg>
)

export default Subscribe
