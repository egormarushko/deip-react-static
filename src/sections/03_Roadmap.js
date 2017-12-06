import React from 'react'
import styled from 'styled-components'
import { m, container } from '../util/styles'

import { Container as c } from './04_Team'
import Heading from 'components/Heading'
import { Main, Section, Entry, Popup } from 'components/Roadmap'

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
            <Section>
              <Entry
                done
                label="Some date"
                text="Some text some text some text some text some text"
              />
              <Entry done label="Some date" text="Some text" />
              <Entry label="Some date" text="Some text" />
            </Section>
            <Section>
              <Entry label="Some date" text="Some text" />
              <Popup label="Some label" text="some text" />
              <Entry
                label="Some date"
                text="Some text some text some text some text"
              />
            </Section>
            <Section>
              <Entry label="Some date" text="Some text" />
              <Popup accent label="Some date" text="Some text" />
              <Entry label="Some date" text="Some text" />
            </Section>
          </Main>
        </div>
      </Container>
    </Root>
  </Bg>
)

export default Roadmap
