import React from 'react'
import { getSiteProps } from 'react-static'

import HeroBackground from 'components/HeroBackground'
import Menu from 'components/Menu'
import MobileMenu from 'components/MobileMenu'

import LanguageSwitcher from 'sections/11_LanguageSwitcher'

const Whitepaper = ({ someData }) => (
  <div>
    <Menu attached={true} />
    <MobileMenu attached={true} />
    <LanguageSwitcher id="language_switcher" />
  </div>
)

export default getSiteProps(Whitepaper)
