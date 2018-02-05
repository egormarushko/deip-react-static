import React from 'react'
import styled from 'styled-components'
import { m, container } from '../util/styles'

import Heading from 'components/Heading'
import button from 'components/Button'
import language from 'components/Language'

export const Root = styled.section`${container};`

// reused in the advisors section
export const Container = styled.div`
  text-align: center;
  width: ${100 * 2 / 3}%;
  margin-left: ${100 / 6}%;
  margin-top: 128px;
  margin-bottom: 64px;

  ${m.lessThan('small')`
    width: 100%;
    margin: 128px 0;
    padding: 0 32px;
  `};
`

const Button = styled(button)`margin-top: 48px;`

const Language = styled(language)`margin-top: 12px;
                                text-align: center;`

const LanguageSwitcher = p => (
  <Root {...p}>
    <Container>
      <Heading>White Paper</Heading>
      <Heading type="sub">Choose language</Heading>
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
