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
import ybokach from 'components/images/team/ybokach.png'
import akastsiushkina from 'components/images/team/akastsiushkina.png'
import emarushko from 'components/images/team/emarushko.png'
import sdzeranov from 'components/images/team/sdzeranov.png'
import akorotkov from 'components/images/team/akorotkov.png'
import amekibel from 'components/images/team/amekibel.png'
import ndanilevich from 'components/images/team/ndanilevich.png'

const personsFirstRow = [
  { src: ashkor, name: 'Alex Shkor', role: 'BLOCKCHAIN ARCHITECT', linkedin: 'https://www.linkedin.com/in/alexshkor/', github: 'https://github.com/alexshkor' },
  { src: etsaryk, name: 'Egor Tsaryk', role: 'TECH LEAD', linkedin: 'https://www.linkedin.com/in/yahor-tsaryk-92032a68/', github: 'https://github.com/egortsaryk9' },
  { src: akulik, name: 'Alexey Kulik', role: 'SOFTWARE ARCHITECT', linkedin: 'https://www.linkedin.com/in/alexey-kulik-61576027/', github: 'https://github.com/akulik-paralect' },
  { src: aermolaev, name: 'Artur Yermalayeu', role: 'FINANCIAL MANAGER', facebook: 'https://www.facebook.com/ArturYe' },  
]

const personsSecondRow = [
  { src: arusetskiy, name: 'Artyom Rusetskiy', role: 'SCIENTIST, MATHEMATICIAN', linkedin: 'https://www.linkedin.com/in/artyom-ruseckiy-8521a89a/' },
  { src: ybokach, name: 'Yura Bokach', role: 'PROJECT MANAGER'},
  { src: amekibel, name: 'Alan Mekibel', role: 'MARKETING MANAGER', linkedin: 'https://www.linkedin.com/in/amekibel/'},
  { src: akastsiushkina, name: 'Anastasiya Kastsiushkina', role: 'PR & COMMUNICATION MANAGER'},      
]

const personsThirdRow = [
  { src: ndanilevich, name: 'Natalya Danilevich', role: 'CONTENT WRITER'}, 
  { src: emarushko, name: 'Egor Marushko', role: 'BLOCKCHAIN DEVELOPER', linkedin: 'https://www.linkedin.com/in/egor-marushko-477175122/', github: 'https://github.com/egormarushko'},
  { src: sdzeranov, name: 'Serge Dzeranov', role: 'BLOCKCHAIN DEVELOPER', linkedin: 'https://www.linkedin.com/in/sergey-dzeranov-b86a20127/', github: 'https://gitlab.com/Dzeranov' },
  { src: akorotkov, name: 'Alexey Korotkov', role: 'BLOCKCHAIN DEVELOPER', linkedin: 'https://www.linkedin.com/in/alexey-korotkov-7b2339123/'},
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
export const BlockIncomplete = styled.div`
  width: ${100 * 2 / 2.75}%;
  display: flex;
  justify-content: space-between;
  &:first-of-type {
    margin-top: 48px;
  }

  ${m.lessThan('small')`
    width: 100%;
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
      <Heading type="sub">Who's creating DEIP platform</Heading>
      <Block>{personsFirstRow.map(p => <Person {...p} key={p.name} />)}</Block>
      <Block>{personsSecondRow.map(p => <Person {...p} key={p.name} />)}</Block>
      <Block>{personsThirdRow.map(p => <Person {...p} key={p.name} />)}</Block>
    </Container>
  </Root>
)

export default Team
