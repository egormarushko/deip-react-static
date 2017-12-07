import React from 'react'
import styled from 'styled-components'
import { m, container } from '../util/styles'

import Heading from 'components/Heading'
import person from 'components/Person'

const ph = 'http://via.placeholder.com/350x350?text=Person'

const persons = [
  { src: ph, name: 'Name', role: 'Role', linkedin: 'src', github: 'src' },
  { src: ph, name: 'Name', role: 'Role', linkedin: 'src', github: 'src' },
  { src: ph, name: 'Name', role: 'Role', linkedin: 'src', github: 'src' },
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
      <Block>{persons.map(p => <Person {...p} key={p.name} />)}</Block>
      <Block>{persons.map(p => <Person {...p} key={p.name} />)}</Block>
    </Container>
  </Root>
)

export default Team
