import React from 'react'
import styled from 'styled-components'

import { Root, Container } from './04_Team'
import Heading from 'components/Heading'
import button from 'components/Button'
import language from 'components/Language'

const Button = styled(button)`margin-top: 48px;`

const Language = styled(language)`margin-top: 12px;
                                text-align: center;`

const LanguageSwitcher = p => (
  <Root {...p}>
    <Container>
      <Heading>DEIP White Paper</Heading>
      <Heading type="sub">Change language</Heading>
      <Language href="/WP_DEIP_ENG.pdf">
        English
      </Language>
      <Language href="/WP_DEIP_RUS.pdf">
        Русский
      </Language>
    </Container>
  </Root>
)

export default LanguageSwitcher
