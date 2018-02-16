import React from 'react'
import { getSiteProps } from 'react-static'

import HeroBackground from 'components/HeroBackground'
import Menu from 'components/Menu'
import MobileMenu from 'components/MobileMenu'
import LanguageSwitcher from 'sections/11_LanguageSwitcher'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-114332532-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Whitepaper = ({ someData }) => (
  <div>
    <Menu attached={true} />
    <MobileMenu attached={true} />
    <LanguageSwitcher id="language_switcher" />
  </div>
)

export default getSiteProps(Whitepaper)
