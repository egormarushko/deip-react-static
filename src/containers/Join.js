import React from 'react'
import { getSiteProps } from 'react-static'

import Poll from 'sections/20_Poll'
import Footer from 'sections/10_Footer'

const Join = ({ someData }) => (
  <div>
    <Poll id="poll" />
    <Footer id="footer" />
  </div>
)

export default getSiteProps(Join)
