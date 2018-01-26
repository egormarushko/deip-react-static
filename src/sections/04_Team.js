import React from 'react'
import styled from 'styled-components'
import { m, container } from '../util/styles'

import Heading from 'components/Heading'
import person from 'components/Person'

import ashkor from 'components/images/team/ashkor.png'
import etsaryk from 'components/images/team/etsaryk.png'
import aermolaev from 'components/images/team/aermolaev.png'
import akulik from 'components/images/team/akulik.png'
import arusetskiy from 'components/images/team/arusetskiy.png'
import akulichkin from 'components/images/team/akulichkin.png'
import nsvyaznoy from 'components/images/team/nsvyaznoy.png'
import emarushko from 'components/images/team/emarushko.png'
import ayantsevich from 'components/images/team/ayantsevich.png'
import dklevzhits from 'components/images/team/dklevzhits.png'

const personsFirstRow = [
  { src: ashkor, name: 'Alex Shkor', role: 'CHIEF EXECUTIVE OFFICER', linkedin: 'https://www.linkedin.com/in/alexshkor/', github: 'https://github.com/alexshkor' },
  { src: etsaryk, name: 'Egor Tsaryk', role: 'CHIEF TECHNOLOGY OFFICER', linkedin: 'https://www.linkedin.com/in/yahor-tsaryk-92032a68/', github: 'https://github.com/egortsaryk9' },
  { src: akulik, name: 'Alexey Kulik', role: 'CHIEF ARCHITECT', linkedin: 'https://www.linkedin.com/in/alexey-kulik-61576027/', github: 'https://github.com/akulik-paralect' },
  { src: aermolaev, name: 'Artur Yermalayeu', role: 'CHIEF FINANCIAL OFFICER', facebook: 'https://www.facebook.com/ArturYe' },  
]

const personsSecondRow = [
  { src: arusetskiy, name: 'Artyom Rusetskiy', role: 'CHIEF SCIENTIST', linkedin: 'https://www.linkedin.com/in/artyom-ruseckiy-8521a89a/' },
  { src: akulichkin, name: 'Anton Kulichkin', role: 'CHIEF PARTNERSHIPS OFFICER', linkedin: 'https://www.linkedin.com/in/anton-kulichkin-b158a886/'},
  { src: nsvyaznoy, name: 'Nikolay Svyaznoy', role: 'CHIEF MARKETING OFFICER', linkedin: 'src'},
  { src: emarushko, name: 'Egor Marushko', role: 'CORE DEVELOPER', linkedin: 'https://www.linkedin.com/in/egor-marushko-477175122/', github: 'https://github.com/egormarushko'},
]

const personsThirdRow = [
  { src: ayantsevich, name: 'Aleksei Yantsevich', role: 'SENIOR RESEARCHER IN BIOORGANIC CHEMISTRY, PhD' },
  { src: dklevzhits, name: 'Dmitry Klevzhits', role: 'PhD', linkedin: 'https://www.linkedin.com/in/dmitry-klevzhits-25917413/'},
]

// reused in the advisors section
export const Root = styled.section`${container};`

// reused in the advisors section
export const Container = styled.div`
  text-align: center;
  width: ${100 * 2 / 3}%;
  margin-left: ${100 / 6}%;
  margin-top: 64px;
  margin-bottom: 64px;

  ${m.lessThan('small')`
    width: 100%;
    margin: 64px 0;
    padding: 0 32px;
  `};
`

// reused in the advisors section
export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  &:first-of-type {
    margin-top: 48px;
  }

  ${m.lessThan('small')`
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
  `};
`

// reused in the advisors section
export const Person = styled(person)`
  margin: 24px 0;
  &:list-of-type {
    margin-bottom: 0;
  }
`

const Team = p => (
  <Root {...p}>
    <Container>
      <Heading>Team</Heading>
      <Heading type="sub">Who's develop DEIP platform</Heading>
      <Block>{personsFirstRow.map(p => <Person {...p} key={p.name} />)}</Block>
      <Block>{personsSecondRow.map(p => <Person {...p} key={p.name} />)}</Block>
      <Block>{personsThirdRow.map(p => <Person {...p} key={p.name} />)}</Block>      
    </Container>
  </Root>
)

export default Team
