import React from 'react'
import styled from 'styled-components'

import { Root, Container } from './04_Team'
import Heading from 'components/Heading'
import button from 'components/Button'
import mention from 'components/Mention'

import meduza from './images/icon_meduza.svg'
import medium from './images/icon_medium.svg'
import tj from './images/icon_tj.svg'

const mentions = [
  {
    src: meduza,
    href: '#',
    children:
      '“Creating a first Product Design System in ...” – Medium (@toommycash)',
  },
  {
    src: medium,
    href: '#',
    children: '“Дудь стал лицом «Альфа-банка» на год ...” – TJ',
  },
  {
    src: tj,
    href: '#',
    children: '“Дудь стал лицом «Альфа-банка» на год ...” – TJ',
  },
]

const Button = button.extend`
  margin-top: 48px;
`

const Mention = styled(mention)`margin-top: 32px;`

const Media = p => (
  <Root {...p}>
    <Container>
      <Heading>Media</Heading>
      <Heading type="sub">Change me</Heading>
      <Mention src={meduza} href="#">
        “Creating a first Product Design System in ...” – Medium (@toommycash)
      </Mention>
      <Mention src={medium} href="#">
        “Creating a first Product Design System in ...” – Medium (@toommycash)
      </Mention>
      <Mention src={tj} href="#">
        “Creating a first Product Design System in ...” – Medium (@toommycash)
      </Mention>
      <Button to="/">Show more</Button>
    </Container>
  </Root>
)

export default Media
