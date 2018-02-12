import React from 'react'
import styled from 'styled-components'
import { m, container } from '../util/styles'

import { Container as c } from './04_Team'
import Heading from 'components/Heading'
import { Main, Section, SectionReverse, Entry, Popup } from 'components/Roadmap'

import roadmap from './images/roadmap.svg'
import roadmapMobile from './images/roadmap_mobile.svg'

const Bg = styled.div`
  background: linear-gradient(180deg, #331d50 51.81%, #247fad 149.89%);
`

const Root = styled.section`
  ${container};
  position: relative;
  h1 {
    color: #fff;
  }
`

const Container = c.extend`
  margin-top: 0;
  margin-bottom: 0;

  ${m.lessThan('small')`
    margin: 0;
  `};
`

const Small = styled.p`
  font-weight: 700;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  margin: 0 0 4px 0;
`

const Headline = styled.div`
  padding: 64px 0 32px 0;
  ${m.greaterThan('small')`
    // position: absolute;
    top: 64px;
    left: 0;
    right: 0;
  `};

  ${m.lessThan('small')`
    padding: 32px 0;
  `};
`

// const Roadmaps = styled.div`
//   img {
//     width: 100%;
//   }

//   .desktop {
//     ${m.lessThan('small')`
//       display: none;
//     `};
//   }

//   .mobile {
//     ${m.greaterThan('small')`
//       display: none;
//     `};
//   }
// `
// <Roadmaps>
// <img src={roadmap} className="desktop" />
// <img src={roadmapMobile} className="mobile" />
// </Roadmaps>

const Roadmap = p => (
  <Bg>
    <Root {...p}>
      <Container>
        <Headline>
          <Small>Decentralization Plan</Small>
          <Heading>DEIP Roadmap</Heading>
        </Headline>
        <div>
          <Main>
            {/* <Section>
              <Entry done label="September 2017" text="New protocol design initiated. Started work on new white-paper" />
              <Entry done label="August 2017" text="Infrastructure change initiated. WP for initial protocol design finished.Graphene infrastructure adjustment" />
              <Entry done label="July 2017" text="Initial protocol design. Proof-of-concept smart-contracts implementation" />
            </Section> */}
            <SectionReverse>
              <Entry done label="October 2017" text="Protocol final design" />
              <Entry done label="November 2017" text="Architecture design finished. WP finished" />
              <Entry done label="December 2017" text="Graphene framework initial setup. Refactoring. Infrastructure setup" />
              {/* <Popup label="Some label" text="some text" /> */}
            </SectionReverse>
            <Section>
              <Entry label="January 2018" text="Core functionality implemented" />
              <Entry label="February 2018" text="Emission distribution system completed" />                
              <Entry label="March 2018" text="Test-net launch. Alfa-version of UI release. Wallet UI release (for testnet)" />                                        
            </Section>
            <SectionReverse>
              <Entry label="April 2018" text="Research Platform Beta UI Launch" />
              <Entry label="May 2018" text="Expertise tokens distribution" />
              <Entry label="June 2018" text="Main-net launch. Initial expertise tokens distribution. Initial research publishing preparation" />
            </SectionReverse>
            <Section>
              <Entry label="July 2018" text="Platform launch" />              
              <Entry label="August 2018" text="Disciplines expansion system implementation" />
              <Entry label="September 2018" text="Storage sidechain for research data" />
            </Section>
            <SectionReverse>
              <Entry label="October 2018" text="Scientific Resources marketplace" />
              <Entry label="November 2018" text="Funding Agency DAO" />
            </SectionReverse>
          </Main>
        </div>
      </Container>
    </Root>
  </Bg>
)

export default Roadmap
