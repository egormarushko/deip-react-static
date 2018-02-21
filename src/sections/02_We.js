import React from 'react'
import styled from 'styled-components'
import { m, container } from '../util/styles'

import Heading from 'components/Heading'
import Text from 'components/Text'

import we from './images/we.svg'
import iconDollar from './images/icon_dollar.svg'
import iconPen from './images/icon_pen.svg'
import iconSpeech from './images/icon_speech.svg'

const Root = styled.section`
  overflow: hidden;
  position: relative;
  background: ${p => p.theme.palette.background.primary};
  padding: 64px 0;

  ${m.lessThan('small') `
    background: #fff;
    padding-left: 32px;
    padding-right: 32px;
  `};
`

const Container = styled.div`
  ${container};
  text-align: center;
`

const Decor = styled.img`
  width: 90%;
  margin-top: 32px;
`

const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin: 0 auto 24px auto;
  ${m.greaterThan('small') `
    display: none;
  `};
`

const Block = styled.div`
  display: flex;
  width: ${100 * 10 / 12}%;
  margin-left: ${100 / 12}%;

  ${m.lessThan('small') `
    flex-flow: column;
    width: 100%;
    margin-left: 0;
  `};
`

const baseCell = styled.div`
  display: flex;
  width: ${100 * 3 / 10}%;
  ${m.lessThan('small') `
    width: 100%;
    padding: 32px 0;
  `};
`
const TopCenter = baseCell.extend`
  width: ${100 * 3 / 12}%;
  flex-flow: column;
  margin: 48px auto auto;
`

const LeftBottom = baseCell.extend`
  flex-flow: column;
  justify-content: flex-end;
`

const CenterMiddle = baseCell.extend`
  align-items: center;
  justify-content: center;
  width: ${100 * 4 / 10}%;
  ${m.lessThan('small') `
    display: none;
  `}
`

const RightBottom = baseCell.extend`
  flex-flow: column;
  justify-content: flex-end;
  padding-bottom: 1.6em;
`

const We = p => (
  <Root {...p}>
    <Container>
      <TopCenter>
        <Icon src={iconPen} />
        <Heading type="title">Publishing platform</Heading>
        <Text>
          DEIP provides decentralized publishing platform headed by scientists
          and researchers.
        </Text>
      </TopCenter>

      <Block>
        <LeftBottom>
          <Icon src={iconDollar} />
          <Heading type="title">Research financing</Heading>
          <Text>
            Various mechanisms to fund a research. Getting financing by automated reward distribution or receive a direct grant of investment.
          </Text>
        </LeftBottom>

        <CenterMiddle>
          <Decor src={we} />
        </CenterMiddle>

        <RightBottom>
          <Icon src={iconSpeech} />
          <Heading type="title">Review system</Heading>
          <Text>
            Economic model that incentivizes fair and qualitative feedback to provide collaborative environment for researches.
          </Text>
        </RightBottom>
      </Block>
    </Container>
  </Root>
)

export default We
