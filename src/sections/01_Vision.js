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
        “Open science and rewarding for knowledge creation”
      </Heading>
      <Text>
        We believe that science will be open and anyone will be able to use results of scientific findings. This should reveal huge human capital and boost knowledge creation. New science will work on global scale and let everyone from any place in the world to participate in scientific research. Review and assessment of academic papers will be transparent and controlled by decentralized protocol, which increases collaboration and incentivizes contribution to global science.
      </Text>
    </Block>
    <Decor src={vision} />
  </Root>
)

export default Vision
