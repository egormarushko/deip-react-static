import React from 'react'
import styled from 'styled-components'
import { m, container } from '../util/styles'

import Heading from 'components/Heading'
import { Root, Container, Person, BlockIncomplete } from './04_Team'

import akulichkin from 'components/images/team/akulichkin.png'
import nsvyaznoy from 'components/images/team/nsvyaznoy.png'
import ayantsevich from 'components/images/team/ayantsevich.png'
import dklevzhits from 'components/images/team/dklevzhits.png'
import apobol from 'components/images/team/apobol.png'

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
  { src: dklevzhits, name: 'Dmitry Klevzhits', role: 'SCIENTIFIC ADVISOR, PhD IN ECONOMICS', linkedin: 'https://www.linkedin.com/in/dmitry-klevzhits-25917413/'},  
  { src: apobol, name: 'Anna Pobol', role: 'SCIENTIFIC ADVISOR, PROFESSOR, PHD IN ECONOMICS', linkedin: 'https://www.linkedin.com/in/apobol/'},  
  { src: akulichkin, name: 'Anton Kulichkin', role: 'PARTNERSHIP ADVISOR', linkedin: 'https://www.linkedin.com/in/anton-kulichkin-b158a886/'},
  { src: nsvyaznoy, name: 'Nikolay Svyaznoy', role: 'MARKETING ADVISOR', linkedin: 'src'},
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
