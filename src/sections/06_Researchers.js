import React from 'react'
import styled from 'styled-components'
import { m } from '../util/styles'

import Heading from 'components/Heading'
import person from 'components/Person'
import messageBox from 'components/MessageBox'
import button from 'components/Button'

import { Root, Container } from './04_Team'

const ph = 'https://via.placeholder.com/350/eee/777?text=Person'

const lorem = `
Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Curabitur vulputate vestibulum lorem.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed id ligula quis est convallis tempor.  Curabitur lacinia pulvinar nibh.  Nam a sapien.
`

const responses = [
  {
    src: ph,
    href: '#1',
    name: 'Name',
    role: 'Role',
    body: 'lorem ipsum',
    linkedin: 'src',
    github: 'src',
  },
  {
    src: ph,
    href: '#2',
    name: 'Name',
    role: 'Role',
    body: 'lorem ipsum',
    linkedin: 'src',
    github: 'src',
  },
  {
    src: ph,
    href: '#3',
    name: 'Name',
    role: 'Role',
    body: 'lorem ipsum',
    linkedin: 'src',
    github: 'src',
  },
]

const Block = styled.div`
  display: flex;
  margin-top: 64px;
  ${m.lessThan('small')`
    flex-flow: column;
    align-items: center;
    margin-top: 64px;
  `};
`

const Person = styled(person)`
  ${m.greaterThan('small')`
    margin-right: 64px;
  `};
`

const MessageBox = styled(messageBox)`
  width: ${100 * 5 / 8}%;
  ${m.lessThan('small')`
    width: 100%;
    margin-top: 24px;
  `};
`

const Button = button.extend`
  margin-top: 48px;
`

const Researchers = p => (
  <Root {...p}>
    <Container>
      <Heading>Researchers</Heading>
      <Heading type="sub">Who is using DEIP platform</Heading>
      {responses.map(r => (
        <Block key={r.href}>
          <Person src={r.src} github={r.github} linkedin={r.linkedin} />
          <MessageBox href={r.href} name={r.name} role={r.role}>
            {lorem}
          </MessageBox>
        </Block>
      ))}
      <Button to="/">All researches</Button>
    </Container>
  </Root>
)

export default Researchers
