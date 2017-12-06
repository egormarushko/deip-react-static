import React from 'react'
import styled from 'styled-components'
import { m } from '../util/styles'

import Heading from 'components/Heading'
import Text from 'components/Text'

import vision from './images/vision.svg'

const Root = styled.section`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;

  ${m.lessThan('small')`
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: auto;
  `};
`

const Block = styled.div`
  display: inline-block;
  margin-left: ${100 / 12}%;
  width: ${100 * 5 / 12}%;

  ${m.lessThan('small')`
    width: 100%;
    padding: 0 32px 32px 32px;
    margin: 0;
  `};
`

const Decor = styled.img`
  height: 40vw;

  ${m.lessThan('small')`
    align-self: flex-end;
    height: 60vw;
  `};
`

const Vision = p => (
  <Root {...p}>
    <Block>
      <Heading>Our vision</Heading>
      <Heading type="sub">
        “Fair rewarding for contribution to human knowledge creation”
      </Heading>
      <Text>
        We aim to revolutionize science and resolve its current crisis by
        applying decentralization to most important processes, like publication,
        financing, assessment of expertises, peer review and collaboration. We
        are trying to create an environment, where all researchers can
        collaborate as efficient as possible ocusing on primary goal - to gain
        new insights into Universe for Humanity.
      </Text>
    </Block>
    <Decor src={vision} />
  </Root>
)

export default Vision
