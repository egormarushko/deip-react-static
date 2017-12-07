import React from 'react'
import styled from 'styled-components'

import Heading from 'components/Heading'
import { Root, Container, Block, Person } from './04_Team'

const ph = 'http://via.placeholder.com/350/eee/777?text=Person'

const persons = [
  { src: ph, name: 'Name', role: 'Role', linkedin: 'src', github: 'src' },
  { src: ph, name: 'Name', role: 'Role', linkedin: 'src', github: 'src' },
  { src: ph, name: 'Name', role: 'Role', linkedin: 'src', github: 'src' },
]

const Advisors = p => (
  <Root {...p}>
    <Container>
      <Heading>Advisors</Heading>
      <Heading type="sub">Who's mentored DEIP platform</Heading>
      <Block>{persons.map(p => <Person special {...p} key={p.name} />)}</Block>
    </Container>
  </Root>
)

export default Advisors
