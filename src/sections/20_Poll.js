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

import axios from 'axios'

const Root = styled.section`
  ${container};
  padding: 48px 0 0 0;
`

const Section = styled.div`margin: 48px 0;`

const Description = styled(Text) `
  display: block;
  width: ${100 * 6 / 8}%;
  margin: 0 auto;

  ${m.lessThan('small') `
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

  ${m.lessThan('small') `
    margin: 0 -8px 32px -8px;
  `};
`

const Radio = styled(radio) `
  width: calc(100% / 4 - 32px);
  margin: 16px;

  ${m.lessThan('small') `
    font-size: 13px;
    width: calc(100% / 2 - 16px);
    margin: 8px;
  `};
`

const Input = styled(input) `
  width: calc(100% / 2 - 32px);
  margin: 16px;

  ${m.lessThan('small') `
    width: 100%;
    margin: 8px;
  `};
`

const Checkbox = styled(checkbox) `
  width: calc(100% / 2 - 32px);
  margin: 16px;

  ${m.lessThan('small') `
    width: 100%;
    margin: 8px;
  `};
`

class Poll extends Component {
  state = {
    value: 'researcher',

    researcherName: '',
    researcherEmail: '',
    researcherAcademicDegree: '',
    researcherAssociation: '',
    researcherPublishResearch: false,
    researcherLookingForInvestment: false,
    researcherCarryOutResearch: false,
    researcherSearchScientists: false,
    researcherReviewResearch: false,
    researcherGbResearchPreparation: false,
    researcherExpTokensDistributionPromotion: false,
    researcherPrototypeReviewer: false,
    researcherAdvisor: false,
    researcherIntroduce: false,
    researcherMessage: '',

    collaboratorName: '',
    collaboratorEmail: '',
    collaboratorRegion: '',
    collaboratorPromote: false,
    collaboratorSpeech: false,
    collaboratorAttractResearchers: false,
    collaboratorParticipateInResearch: false,
    collaboratorGatherFeedback: false,
    collaboratorAdvisor: false,
    collaboratorMessage: '',

    investorName: '',
    investorEmail: '',
    investorBuyResearchTokens: false,
    investorPrivatePresale: false,
    investorCrowdsale: false,
    investorResearchesGrant: false,
    investorDisciplineGrant: false,
    investorMessage: '',

    organisationName: '',
    organisationFieldOfActivity: '',
    organisationDelegateName: '',
    organisationEmail: '',
    organisationApplyTechnologies: false,
    organisationAttractFunding: false,
    organisationDetermineDirection: false,
    organisationProvideEquipment: false,
    organisationMessage: '',
  }

  setShow = e => this.setState({ value: e.target.id })
  setValue = e => this.setState({ [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })
  sendForm = e => {
    var val = this.state.value;
    e.preventDefault();
    
    switch (val) {
      case "researcher":
        this.sendResearcherForm();
        break;
      case "collaborator":
        this.sendCollaboratorForm();
        break;
      case "investor":
        this.sendInvestorForm();
        break;
      case "organisation":
        this.sendOrganisationForm();
        break;
    }
  }

  sendResearcherForm = () => {
    debugger
    var form = {
      generalInfo: {
        fullName: this.state.researcherName,
        email: this.state.researcherEmail
      },
      researcherInfo: {
        academicDegree: this.state.researcherAcademicDegree,
        association: this.state.researcherAssociation,
        publishResearch: this.state.researcherPublishResearch,
        lookingForInvestment: this.state.researcherLookingForInvestment,
        carryOutResearch: this.state.researcherCarryOutResearch,
        searchScientists: this.state.researcherSearchScientists,
        reviewResearch: this.state.researcherReviewResearch,
        gbResearchPreparation: this.state.researcherGbResearchPreparation,
        expTokensDistributionPromotion: this.state.researcherExpTokensDistributionPromotion,
        prototypeReviewer: this.state.researcherPrototypeReviewer,
        advisor: this.state.researcherAdvisor,
        introduce: this.state.researcherIntroduce,
        message: this.state.researcherMessage
      }

    };
    console.log(form);
    axios.post('http://146.185.140.12/api/subscriber', form)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  sendCollaboratorForm = () => {
    var form = {
      generalInfo: {
        fullName: this.collaboratorForm.name,
        email: this.collaboratorForm.email
      },
      contributorInfo: {
        region: this.collaboratorForm.region,
        promote: this.collaboratorForm.promote,
        speech: this.collaboratorForm.speech,
        attractResearchers: this.collaboratorForm.attractResearchers,
        participateInResearch: this.collaboratorForm.participateInResearch,
        gatherFeedback: this.collaboratorForm.gatherFeedback,
        advisor: this.collaboratorForm.advisor,
        message: this.collaboratorForm.message
      }

    };
    axios.post('http://146.185.140.12/api/subscriber', form)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  sendInvestorForm() {
    var form = {
      generalInfo: {
        fullName: this.investorForm.name,
        email: this.investorForm.email
      },
      investorInfo: {
        buyResearchesTokens: this.investorForm.buyResearchesTokens,
        privatePresale: this.investorForm.privatePresale,
        crowdsale: this.investorForm.crowdsale,
        researchesGrant: this.investorForm.researchesGrant,
        disciplineGrant: this.investorForm.disciplineGrant,
        message: this.investorForm.message
      }

    };
      console.log(form);
    axios.post('http://146.185.140.12/api/subscriber', form)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  sendOrganisationForm() {
    var form = {
      generalInfo: {
        fullName: this.organisationForm.delegateName,
        email: this.organisationForm.email
      },
      organisationInfo: {
        organisationName: this.organisationForm.organisationName,
        fieldOfActivity: this.organisationForm.fieldOfActivity,
        applyTechnologies: this.organisationForm.applyTechnologies,
        attractFunding: this.organisationForm.attractFunding,
        determineDirection: this.organisationForm.determineDirection,
        provideEquipment: this.organisationForm.provideEquipment,
        message: this.organisationForm.message
      }

    };
      console.log(form);
    axios.post('http://146.185.140.12/api/subscriber', form)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { setShow } = this
    const { sendForm } = this
    const { setValue } = this
    return (
      <Root {...this.props}>
        <Menu attached />
        <MobileMenu attached />
        <Container>
          <form onSubmit={this.sendForm} action="">
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
                    <Input name="researcherName" icon="user" placeholder="Full name" onChange={setValue} />
                    <Input
                      name="researcherAcademicDegree"
                      icon="graduation-cap"
                      placeholder="Academic degree"
                      onChange={setValue}
                    />
                    <Input name="researcherEmail" icon="envelope" placeholder="Email" onChange={setValue} />
                    <Input
                      name="researcherAssociation"
                      icon="users"
                      placeholder="Association"
                      onChange={setValue}
                    />
                  </ControlBlock>
                </Section>
                <Section>
                  <Heading type="sub">How do you intend to use DEIP?</Heading>
                  <ControlBlock>
                    <Checkbox type="checkbox" name="researcherPublishResearch" onChange={setValue}>
                      Publish research on the platform
                    </Checkbox>
                    <Checkbox type="checkbox" name="researcherLookingForInvestment" onChange={setValue}>
                      Obtain funding for your research
                    </Checkbox>
                    <Checkbox type="checkbox" name="researcherCarryOutResearch" onChange={setValue}>
                      Manage your research
                    </Checkbox>
                    <Checkbox type="checkbox" name="researcherSearchScientists" onChange={setValue}>
                      Collaborate with scientists and researchers on your research
                    </Checkbox>
                    <Checkbox type="checkbox" name="researcherReviewResearch" onChange={setValue}>
                      Review and evaluate other researches
                    </Checkbox>
                  </ControlBlock>
                </Section>
                <Section>
                  <Heading type="sub">How can you help the platform?</Heading>
                  <ControlBlock>
                    <Checkbox type="checkbox" name="researcherGbResearchPreparation" onChange={setValue}>
                      Prepare your previous researches to be included into genesis block
                    </Checkbox>
                    <Checkbox type="checkbox" name="researcherExpTokensDistributionPromotion" onChange={setValue}>Invite scientists and researches to participate in initial discipline specific tokens distribution</Checkbox>
                    <Checkbox type="checkbox" name="researcherPrototypeReviewer" onChange={setValue}>
                      Use prototype of DEIP platform and provide feedback to the development team
                    </Checkbox>
                    <Checkbox type="checkbox" name="researcherAdvisor" onChange={setValue}>
                      Advise on any specific matter correlated to your expertise
                    </Checkbox>
                    <Checkbox type="checkbox" name="researcherIntroduce" onChange={setValue}>
                      Introduce us with your academic community
                    </Checkbox>
                  </ControlBlock>
                  <TextArea name="researcherMessage" placeholder="Please, provide your background" onChange={setValue} />
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
                    <Input name="collaboratorName" icon="user" placeholder="Full name" onChange={setValue}/>
                    <Input name="collaboratorRegion" icon="globe" placeholder="Region" onChange={setValue}/>
                    <Input name="collaboratorEmail" icon="envelope" placeholder="Email" onChange={setValue}/>
                  </ControlBlock>
                </Section>
                <Section>
                  <Heading type="sub">How can you help the platform?</Heading>
                  <ControlBlock>
                    <Checkbox type="checkbox" name="collaboratorPromote" onChange={setValue}>
                      Share information about DIEP (blog posts / social media /
                      offline / etc.)
                    </Checkbox>
                    <Checkbox type="checkbox" name="collaboratorParticipateInResearch" onChange={setValue}>
                      Participate in researches on the platform
                    </Checkbox>
                    <Checkbox type="checkbox" name="collaboratorSpeech" onChange={setValue}>
                      Tell about DEIP in your public speech
                    </Checkbox>
                    <Checkbox type="checkbox" name="collaboratorGatherFeedback" onChange={setValue}>
                      Gather feedback from potential users
                    </Checkbox>
                    <Checkbox type="checkbox" name="collaboratorAttractResearchers" onChange={setValue}>
                      Engage researchers to use DEIP
                    </Checkbox>
                    <Checkbox type="checkbox" name="collaboratorAdvisor" onChange={setValue}>
                      Advise on any specific matter correlated to your expertise
                    </Checkbox>
                  </ControlBlock>
                  <TextArea name="collaboratorMessage" placeholder="Please, provide your background" onChange={setValue} />                  
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
                    <Input name="investorName" icon="user" placeholder="Full name" onChange={setValue} />
                    <Input name="investorEmail" icon="envelope" placeholder="Email" onChange={setValue} />
                  </ControlBlock>
                </Section>
                <Section>
                  <Heading type="sub">
                    Are you interested in investing in research on DEIP platform?
                  </Heading>
                  <ControlBlock>
                    <Checkbox type="checkbox" name="investorBuyResearchTokens" onChange={setValue}>
                      Buy researches tokens
                    </Checkbox>
                  </ControlBlock>
                </Section>
                <Section>
                  <Heading type="sub">
                    Are you interested in investing in DEIP platform?
                  </Heading>
                  <ControlBlock>
                    <Checkbox type="checkbox" name="investorPrivatePresale" onChange={setValue}>
                      Private presale
                    </Checkbox>
                    <Checkbox type="checkbox" name="investorCrowdsale" onChange={setValue}>
                      Public tokensale
                    </Checkbox>
                  </ControlBlock>
                </Section>
                <Section>
                  <Heading type="sub">Use DEIP to allocate grants</Heading>
                  <ControlBlock>
                    <Checkbox type="checkbox" name="investorResearchesGrant" onChange={setValue}>
                      Grant for researches
                    </Checkbox>
                    <Checkbox type="checkbox" name="investorDisciplineGrant" onChange={setValue}>
                      Grant for disciplines
                    </Checkbox>
                  </ControlBlock>
                  <TextArea name="investorMessage" placeholder="Please, provide your background" onChange={setValue} />                  
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
                      name="organisationName"
                      icon="building"
                      placeholder="Organisation (Company, Univercity)"
                      onChange={setValue}
                    />
                    <Input
                      name="organisationDelegateName"
                      icon="user"
                      placeholder="Contact person name"
                      onChange={setValue}
                    />
                    <Input
                      name="organisationFieldOfActivity"
                      icon="book"
                      placeholder="Field of activity"
                      onChange={setValue}
                    />
                    <Input name="organisationEmail" icon="envelope" placeholder="Email" onChange={setValue} />
                  </ControlBlock>
                </Section>
                <Section>
                  <Heading type="sub">How do you intend to use DEIP?</Heading>
                  <ControlBlock>
                    <Checkbox type="checkbox" name="organisationApplyTechnologies" onChange={setValue} >
                      Apply DEIP technologies within the organization
                    </Checkbox>
                    <Checkbox type="checkbox" name="organisationAttractFunding" onChange={setValue} >
                      Attract funding for your researches
                    </Checkbox>
                    <Checkbox type="checkbox" name="organisationDetermineDirection" onChange={setValue}>
                      Determine the direction of research using the DEIP
                      statistics
                    </Checkbox>
                  </ControlBlock>
                </Section>
                <Section>
                  <Heading type="sub">How can you help the platform?</Heading>
                  <ControlBlock>
                    <Checkbox type="checkbox" name="organisationProvideEquipment" onChange={setValue} >
                      Provide your equipment for research on the DEIP platform.
                    </Checkbox>
                  </ControlBlock>
                  <TextArea name="organisationMessage" placeholder="Please, provide your background" onChange={setValue} />                  
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
