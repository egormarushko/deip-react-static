import React, { Component } from 'react'
import styled from 'styled-components'
import { m, container } from '../util/styles'

import { Container } from './04_Team'

import Menu from 'components/Menu'
import MobileMenu from 'components/MobileMenu'
import Heading from 'components/Heading'
import Text from 'components/Text'
import { Shower, Show } from 'components/Shower'
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
    value: 'researcher',
  }

  setShow = e => this.setState({ value: e.target.id })

  render() {
    const { setShow } = this
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
                  onClick={setShow}
                />
                <Radio
                  id="collaborator"
                  name="type"
                  icon="user-plus"
                  children="Collaborator"
                  onClick={setShow}
                />
                <Radio
                  id="investor"
                  name="type"
                  icon="usd"
                  children="Investor"
                  onClick={setShow}
                />
                <Radio
                  id="organisation"
                  name="type"
                  icon="building"
                  children="Organisation"
                  onClick={setShow}
                />
              </ControlBlock>
            </Section>
            <Shower value={this.state.value}>
              <Show value="researcher">
                <Section>
                  <Description>
                    You will be one of the first members of DEIP platform, who
                    will start and lead DEIP community. Every scientist and
                    researcher, who joins DEIP platform before its official
                    release (genesis block) will have an ability to participate
                    in initial expertise token distribution and obtain tokens in
                    conformity with his proficiency. These tokens are not only
                    the measure of your influence within your disciplines, on
                    early stages it is also a great responsibility because your
                    vote will have a big impact on emission distribution thus
                    affecting how much each research is rewarded.
                  </Description>
                </Section>
                <Section>
                  <Heading type="sub">Basic information</Heading>
                  <ControlBlock>
                    <Input name="name" icon="user" placeholder="Full name" />
                    <Input
                      name="degree"
                      icon="graduation-cap"
                      placeholder="Academic degree"
                    />
                    <Input name="email" icon="envelope" placeholder="Email" />
                    <Input
                      name="association"
                      icon="users"
                      placeholder="Association"
                    />
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
                    <Checkbox name="3">
                      Attract fundings for your research
                    </Checkbox>
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
                      Prepare your previous researches to be included into
                      genesis block
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
              </Show>

              <Show value="collaborator">
                <Section>
                  <Description>
                    We are constantly looking for people who are willing to
                    spread the word about DEIP around the world. You can join
                    our team if you are lecturer at university or take part in
                    conferences, or can speak to potential DEIP user in any
                    other way. Please let us know how you can help DEIP and we
                    will be in touch with you shortly.
                  </Description>
                </Section>
                <Section>
                  <Heading type="sub">Basic information</Heading>
                  <ControlBlock>
                    <Input name="name" icon="user" placeholder="Full name" />
                    <Input name="region" icon="globe" placeholder="Region" />
                    <Input name="email" icon="envelope" placeholder="Email" />
                  </ControlBlock>
                </Section>
                <Section>
                  <Heading type="sub">How can you help the platform?</Heading>
                  <ControlBlock>
                    <Checkbox checked name="9">
                      Share information about DIEP (blog posts / social media /
                      offline / etc.)
                    </Checkbox>
                    <Checkbox name="10">
                      Participate in researches on the platform
                    </Checkbox>
                    <Checkbox name="11">
                      Tell about DEIP in your public speech
                    </Checkbox>
                    <Checkbox name="12">
                      Gather feedback from potential users
                    </Checkbox>
                    <Checkbox checked name="13">
                      Engage researchers to use DEIP
                    </Checkbox>
                    <Checkbox checked name="14">
                      Advise on any specific matter correlated to your expertise
                      Engage researchers to use DEIP
                    </Checkbox>
                  </ControlBlock>
                </Section>
              </Show>

              <Show value="investor">
                <Section>
                  <Description>
                    Either you are interested in funding researches on our
                    platform or just want to grant specific research we believe
                    you may be interested in DEIP token sale. Please provide
                    your contact information and we will let you know what we
                    can offer.
                  </Description>
                </Section>
                <Section>
                  <Heading type="sub">Basic information</Heading>
                  <ControlBlock>
                    <Input name="name" icon="user" placeholder="Full name" />
                    <Input name="email" icon="envelope" placeholder="Email" />
                  </ControlBlock>
                </Section>
                <Section>
                  <Heading type="sub">
                    Are you interested in investing in research on DEIP
                    platform?
                  </Heading>
                  <ControlBlock>
                    <Checkbox checked name="15">
                      Buy researches tokens
                    </Checkbox>
                  </ControlBlock>
                </Section>
                <Section>
                  <Heading type="sub">
                    Are you interested in investing in research on DEIP
                    platform?
                  </Heading>
                  <ControlBlock>
                    <Checkbox checked name="16">
                      Private presale
                    </Checkbox>
                    <Checkbox checked name="17">
                      Public tokensale
                    </Checkbox>
                  </ControlBlock>
                </Section>
                <Section>
                  <Heading type="sub">Use DEIP to allocate grants</Heading>
                  <ControlBlock>
                    <Checkbox checked name="18">
                      Grant for researches
                    </Checkbox>
                    <Checkbox checked name="19">
                      Grant for disciplines
                    </Checkbox>
                  </ControlBlock>
                </Section>
              </Show>

              <Show value="organisation">
                <Section>
                  <Description>
                    We are open to partnership proposals, so if your
                    organization have an interest in collaboration with DEIP or
                    be presented on the platform as funding agency or group of
                    researchers we are ready to find best win-win strategies
                    with you.
                  </Description>
                </Section>
                <Section>
                  <Heading type="sub">Basic information</Heading>
                  <ControlBlock>
                    <Input
                      name="org"
                      icon="building"
                      placeholder="Organisation (Company, Univercity)"
                    />
                    <Input
                      name="name"
                      icon="user"
                      placeholder="Contact person name"
                    />
                    <Input
                      name="activity"
                      icon="book"
                      placeholder="Field of activity"
                    />
                    <Input name="email" icon="envelope" placeholder="Email" />
                  </ControlBlock>
                </Section>
                <Section>
                  <Heading type="sub">How do you intend to use DEIP?</Heading>
                  <ControlBlock>
                    <Checkbox checked name="20">
                      Apply DEIP technologies within the organization
                    </Checkbox>
                    <Checkbox checked name="21">
                      Attract funding for your researches
                    </Checkbox>
                    <Checkbox checked name="22">
                      Determine the direction of research using the DEIP
                      statistics
                    </Checkbox>
                  </ControlBlock>
                </Section>
                <Section>
                  <Heading type="sub">How can you help the platform?</Heading>
                  <ControlBlock>
                    <Checkbox checked name="23">
                      Provide your equipment for research on the DEIP platform.
                    </Checkbox>
                  </ControlBlock>
                </Section>
              </Show>
            </Shower>

            <Button submit primary>
              Send
            </Button>
          </form>
        </Container>
      </Root>
    )
  }
}

export default Poll
