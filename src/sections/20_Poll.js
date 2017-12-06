import React, { Component } from 'react'
import styled from 'styled-components'
import { m, container } from '../util/styles'

import { Container } from './04_Team'

import Menu from 'components/Menu'
import MobileMenu from 'components/MobileMenu'
import Heading from 'components/Heading'
import Text from 'components/Text'
import Button from 'components/Button'
import radio from 'components/RadioButton'
import input from 'components/Input'
import checkbox from 'components/Checkbox'
import TextArea from 'components/TextArea'

const Root = styled.section`
  ${container};
  padding: 48px 0 0 0;
`

const Section = styled.div`margin: 48px 0;`

const Description = styled(Text)`
  display: block;
  width: ${100 * 6 / 8}%;
  margin: 0 auto;

  ${m.lessThan('small')`
    text-align: left;
    width: 100%;
    margin: 0;
  `};
`

const ControlBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  margin: 0 -16px 32px -16px;

  ${m.lessThan('small')`
    margin: 0 -8px 32px -8px;
  `};
`

const Radio = styled(radio)`
  width: calc(100% / 4 - 32px);
  margin: 16px;

  ${m.lessThan('small')`
    font-size: 13px;
    width: calc(100% / 2 - 16px);
    margin: 8px;
  `};
`

const Input = styled(input)`
  width: calc(100% / 2 - 32px);
  margin: 16px;

  ${m.lessThan('small')`
    width: 100%;
    margin: 8px;
  `};
`

const Checkbox = styled(checkbox)`
  width: calc(100% / 2 - 32px);
  margin: 16px;

  ${m.lessThan('small')`
    width: 100%;
    margin: 8px;
  `};
`

class Poll extends Component {
  state = {
    type: 'researcher',
  }

  setType = e => this.setState({ type: e.target.id })

  render() {
    const { setType } = this
    return (
      <Root {...this.props}>
        <Menu attached />
        <MobileMenu attached />
        <Container>
          <form action="">
            <Section>
              <Heading>Join Us</Heading>
              <Heading type="sub">Choose your role</Heading>
              <ControlBlock>
                <Radio
                  checked
                  id="researcher"
                  name="type"
                  icon="flask"
                  children="Researcher"
                  onClick={setType}
                />
                <Radio
                  id="collaborator"
                  name="type"
                  icon="user-plus"
                  children="Collaborator"
                  onClick={setType}
                />
                <Radio
                  id="investor"
                  name="type"
                  icon="usd"
                  children="Investor"
                  onClick={setType}
                />
                <Radio
                  id="organisation"
                  name="type"
                  icon="building"
                  children="Organisation"
                  onClick={setType}
                />
              </ControlBlock>
              <Description>{descs[this.state.type]}</Description>
            </Section>
            <Section>
              <Heading type="sub">Basic information</Heading>
              <ControlBlock>
                <Input icon="user" placeholder="Full name" />
                <Input icon="graduation-cap" placeholder="Academic degree" />
                <Input icon="envelope" placeholder="Email" />
                <Input icon="users" placeholder="Association" />
              </ControlBlock>
            </Section>
            <Section>
              <Heading type="sub">How do you intend to use DEIP?</Heading>
              <ControlBlock>
                <Checkbox checked name="1">
                  Publish research on the platform
                </Checkbox>
                <Checkbox name="2">
                  Invite scientists and researchers to your research
                </Checkbox>
                <Checkbox name="3">Attract fundings for your research</Checkbox>
                <Checkbox name="4">
                  Work as reviewer for other research
                </Checkbox>
                <Checkbox checked name="5">
                  Manage your research
                </Checkbox>
              </ControlBlock>
            </Section>
            <Section>
              <Heading type="sub">How can you help the platform?</Heading>
              <ControlBlock>
                <Checkbox checked name="6">
                  Prepare your previous researches to be included into genesis
                  block
                </Checkbox>
                <Checkbox name="7">To become advisor</Checkbox>
                <Checkbox name="8">
                  Invite scientists for participate in disciplines tokens
                  distribution
                </Checkbox>
                <Checkbox checked name="9">
                  Use prototype of DEIP platform and provide feedback to the
                  development team
                </Checkbox>
              </ControlBlock>
              <TextArea placeholder="Please, provide your background" />
            </Section>
            <Button primary to="/">
              Send
            </Button>
          </form>
        </Container>
      </Root>
    )
  }
}

const descs = {
  researcher: `1 You will be one of the first members of DEIP platform. Your feedback is very important
for us, and we would be glad to have you in our advisory board. Every scientist and 
researcher, who joins DEIP platform before its official release (genesis block) will have 
an abbility to participate in initial expertise token distribution and obtain tokens in 
conformity with his proficiency.`,
  collaborator: `2 You will be one of the first members of DEIP platform. Your feedback is very important
for us, and we would be glad to have you in our advisory board. Every scientist and 
researcher, who joins DEIP platform before its official release (genesis block) will have 
an abbility to participate in initial expertise token distribution and obtain tokens in 
conformity with his proficiency.`,
  investor: `3 You will be one of the first members of DEIP platform. Your feedback is very important
for us, and we would be glad to have you in our advisory board. Every scientist and 
researcher, who joins DEIP platform before its official release (genesis block) will have 
an abbility to participate in initial expertise token distribution and obtain tokens in 
conformity with his proficiency.`,
  organisation: `4 You will be one of the first members of DEIP platform. Your feedback is very important
for us, and we would be glad to have you in our advisory board. Every scientist and 
researcher, who joins DEIP platform before its official release (genesis block) will have 
an abbility to participate in initial expertise token distribution and obtain tokens in 
conformity with his proficiency.`,
}

export default Poll
