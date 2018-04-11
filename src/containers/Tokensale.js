import React from 'react'
import { Head } from 'react-static'
import { getSiteProps } from 'react-static'

import HeroBackground from 'components/HeroBackground'
import Menu from 'components/Menu'
import MobileMenu from 'components/MobileMenu'
import TokensaleForm from 'sections/21_TokensaleForm'

const Tokensale = ({ someData }) => (
  <div>
    <Head>
      <title>DEIP | Token Sale</title>
    </Head>
    <TokensaleForm/>
  </div>
)

export default getSiteProps(Tokensale)
