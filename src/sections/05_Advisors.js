import React from 'react'
import styled from 'styled-components'
import { m, container } from '../util/styles'

import Heading from 'components/Heading'
import { Root, Container, Person, BlockIncomplete } from './04_Team'

import ayantsevich from 'components/images/team/ayantsevich.png'
import dklevzhits from 'components/images/team/dklevzhits.png'

export const Block = styled.div`
  display: flex;
  justify-content: space-around;
  &:first-of-type {
    margin-top: 48px;
  }

  ${m.lessThan('small')`
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
  `};
`

const persons = [
  // { src: ayantsevich, name: 'Aleksei Yantsevich', role: 'SENIOR RESEARCHER IN BIOORGANIC CHEMISTRY, PhD' },
  { src: dklevzhits, name: 'Dmitry Klevzhits', role: 'PhD IN ECONOMICS', linkedin: 'https://www.linkedin.com/in/dmitry-klevzhits-25917413/'},
]

const Advisors = p => (
  <Root {...p}>
    <Container>
      <Heading>Advisors</Heading>
      <Heading type="sub">Who's mentoring DEIP team</Heading>
      <Block>{persons.map(p => <Person special {...p} key={p.name} />)}</Block>
    </Container>
  </Root>
)

export default Advisors
