import React from 'react'
import { getSiteProps } from 'react-static'
import { Head } from 'react-static'
import Hero from 'sections/00_Hero'
import Vision from 'sections/01_Vision'
import We from 'sections/02_We'
import Roadmap from 'sections/03_Roadmap'
import Team from 'sections/04_Team'
import Advisors from 'sections/05_Advisors'
import Researchers from 'sections/06_Researchers'
import Partners from 'sections/07_Partners'
import Media from 'sections/08_Media'
import Subscribe from 'sections/09_Subscribe'
import Footer from 'sections/10_Footer'

const Index = ({ someData }) => (
  <div>
    <Head>
      <title>DEIP — decentralized scientific platform</title>
    </Head>
    <Hero id="hero" />
    <Vision id="vision" />
    <We id="about" />
    <Roadmap id="roadmap" />
    <Team id="team" />
    <Advisors id="advisors" />
    {/* <Researchers id="researchers" /> */}
    <Partners id="partners" />
    {/* <Media id="media" /> */}
    <Subscribe id="subscribe" />
    <Footer id="footer" />
  </div>
)

export default getSiteProps(Index)
