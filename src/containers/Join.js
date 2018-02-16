import React from 'react'
import { getSiteProps } from 'react-static'

import Poll from 'sections/20_Poll'
import Footer from 'sections/10_Footer'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-114332532-1');

const Join = ({ someData }) => (
  <div>
    <Poll id="poll" />
    <Footer id="footer" />
  </div>
)

export default getSiteProps(Join)
