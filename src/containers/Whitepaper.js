import React from 'react'
import { getSiteProps } from 'react-static'

import Hero from 'sections/00_Hero'
import Footer from 'sections/10_Footer'

import LanguageSwitcher from 'sections/11_LanguageSwitcher'

const Whitepaper = ({ someData }) => (
  <div>
      <LanguageSwitcher id="language_switcher" />
  </div>
)

export default getSiteProps(Whitepaper)
