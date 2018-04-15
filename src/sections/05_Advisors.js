import React from 'react'
import styled from 'styled-components'
import { m, container } from '../util/styles'

import Heading from 'components/Heading'
import { Root, Container, Person, BlockIncomplete, BlockIncompleteAdvisor } from './04_Team'

import hdecastro from 'components/images/team/hdecastro.png'
import akulichkin from 'components/images/team/akulichkin.png'
import nsvyaznoy from 'components/images/team/nsvyaznoy.png'
import ayantsevich from 'components/images/team/ayantsevich.png'
import dklevzhits from 'components/images/team/dklevzhits.png'
import apobol from 'components/images/team/apobol.png'
import soenkebartling from 'components/images/team/soenkebartling.png'
import aadamiants from 'components/images/team/aadamiants.png'
import llozner from 'components/images/team/llozner.png'

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

const personsFirstRow = [
  { src: hdecastro, name: 'Julio O. De Castro', role: 'SCIENTIFIC ADVISOR, PROFESSOR AT IE BUSINESS SCHOOL (MADRID)', researchgate: 'https://www.researchgate.net/profile/Julio_Castro5'},    
  { src: soenkebartling, name: 'PD Dr. Sönke Bartling', role: 'SCIENTIFIC ADVISOR, BLOCKCHAINFORSCIENCE FOUNDER', linkedin: 'https://www.linkedin.com/in/soenkebartling/', twitter: 'https://twitter.com/soenkeba', researchgate: 'https://www.researchgate.net/profile/Soenke_Bartling'},  
  { src: llozner, name: 'Leonid Lozner', role: 'PRODUCT ADVISOR', linkedin: 'https://www.linkedin.com/in/leonid-lozner-a83b0a57/'},  
  { src: dklevzhits, name: 'Dmitry Klevzhits', role: 'SCIENTIFIC ADVISOR, PhD IN ECONOMICS', linkedin: 'https://www.linkedin.com/in/dmitry-klevzhits-25917413/'},  
]

const personsSecondRow = [
  { src: ayantsevich, name: 'Aleksei Yantsevich', role: 'SENIOR RESEARCHER IN BIOORGANIC CHEMISTRY, PhD', researchgate: 'https://www.researchgate.net/profile/Aliaksei_Yantsevich' },  
  { src: apobol, name: 'Anna Pobol', role: 'SCIENTIFIC ADVISOR, PROFESSOR, PHD IN ECONOMICS', linkedin: 'https://www.linkedin.com/in/apobol/'},    
  { src: akulichkin, name: 'Anton Kulichkin', role: 'PARTNERSHIP ADVISOR', linkedin: 'https://www.linkedin.com/in/anton-kulichkin-b158a886/'},  
  { src: nsvyaznoy, name: 'Nikolay Svyaznoy', role: 'MARKETING ADVISOR'},
]

const personsThirdRow = [
  { src: aadamiants, name: 'Alexander Adamiants', role: 'PARTNERSHIP ADVISOR', facebook: 'https://www.facebook.com/alexander.adamiants'},
]

const Advisors = p => (
  <Root {...p}>
    <Container>
      <Heading>Advisors</Heading>
      <Heading type="sub">Who's mentoring DEIP team</Heading>
      <Block>{personsFirstRow.map(p => <Person special {...p} key={p.name} />)}</Block>
      <Block>{personsSecondRow.map(p => <Person special {...p} key={p.name} />)}</Block>
      <BlockIncompleteAdvisor>{personsThirdRow.map(p => <Person special {...p} key={p.name} />)}</BlockIncompleteAdvisor>
    </Container>
  </Root>
)

export default Advisors
