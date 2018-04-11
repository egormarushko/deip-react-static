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
import inputfull from 'components/InputFull'
import checkbox from 'components/Checkbox'
import TextArea from 'components/TextArea'

import axios from 'axios'
import ToggleDisplay from 'react-toggle-display'
import FileInput from 'react-simple-file-input'
import CssBaseline from 'material-ui/CssBaseline'
import { Creatable } from 'react-select'

import validator from 'validator';
import { Validate, ValidateGroup, ErrorMessage } from "react-validate";

import { countries } from '../components/data/Country';

const Select = styled.select`
  border-radius: 5px;
  border: 1px solid ${p => p.theme.palette.primaryLight};
  font-size: 16px;
  color: 1px solid ${p => p.theme.palette.primary};
  line-height: 49px;
  padding: 0 48px 0 16px;
  width: 100%;
  min-width: 0;
  transition: border 0.15s;
  position: relative;
  background-color: white;
`

const CreatableDropdown = styled(Creatable) `
bottom: 0;
color: #aaa;
left: 0;
line-height: 34px;
padding-left: 10px;
padding-right: 10px;
position: absolute;
right: 0;
top: 0;
max-width: 100%;
overflow: hidden;
-o-text-overflow: ellipsis;
text-overflow: ellipsis;
white-space: nowrap;
`

const required = (value, props) => {
  if (!value || (props.isCheckable && !props.checked)) {
    return <span className="form-error is-visible">Required</span>;
  }
};

const email = (value) => {
  if (!validator.isEmail(value)) {
    return <span className="form-error is-visible">${value} is not a valid email.</span>;
  }
};

const myOptions = [
  { value: 'one', text: 'One' },
  { value: 'two', text: 'Two' },
  { value: 'stream', text: 'hello, twitch' },
]

const Root = styled.section`
  ${container};
  padding: 48px 0 0 0;
`

const Section = styled.div`margin: 48px 0;`

const Message = styled.div`
  padding-top: 100px;
  height:450px;`

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
  margin: 0 -16px 16px -16px;

  ${m.lessThan('small') `
    margin: 0 -8px 32px -8px;
  `};
`
const VerticalBlock = styled.div`
  display: table-cell;
  flex-wrap: wrap;
  text-align: left;
  margin: 0 -16px 32px -16px;

  ${m.lessThan('small') `
    margin: 0 -8px 32px -8px;
  `};
`

const Radio = styled(radio) `
  width: calc(100% / 2 - 32px);
  margin: 16px;

  ${m.lessThan('small') `
  width: 100%;
  margin: 8px;
  `};
`

const Input = styled(inputfull) `
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

class TokensaleForm extends Component {
  state = {
    isVisibleSuccesSubscriptionMessage: false,
    tokensaleName: '',
    tokensaleEmail: '',
    tokensalePerson: 'person',
    tokensaleCountry: '',
    tokensaleAmount: '5 000 - 10 000',
  }

  amounts = {
    company: [
      '25 000 - 100 000', 
      '100 000 - 500 000', 
      '500 000 - 1 000 000', 
      '1 000 000 - 3 000 000'
    ],
    person: [
      '5 000 - 10 000',
      '10 000 - 50 000',
      '50 000 - 100 000',
      '100 000 - 500 000'
    ]
  }

  setShow = e => this.setState({ value: e.target.id })

  setValue = e => {
    this.setState({ [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })
  }

  setPerson = e => {
    this.setValue(e);
    this.setState({ tokensaleAmount: this.amounts[ e.target.value ][0] });
  }

  sendForm = e => {
    e.preventDefault();

    var self = this;

    var form = {
      generalInfo: {
        fullName: this.state.tokensaleName,
        email: this.state.tokensaleEmail
      },
      researcherInfo: {
        tokensaleName: this.state.tokensaleName,
        tokensaleEmail: this.state.tokensaleEmail,
        tokensalePerson: this.state.tokensalePerson,
        tokensaleCountry: this.state.tokensaleCountry,
        tokensaleAmount: this.state.tokensaleAmount,
      }
    };

    console.log(form);
    debugger    
    
    axios.post('http://146.185.140.12:3000/api/subscriber', form)
      .then(function (response) {
        self.state.isVisibleSuccesSubscriptionMessage = true;
        self.forceUpdate();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleClickTest = () => {
    // debugger    
    this;
    // this.form.validateAll();
  };

  render() {
    const { setShow } = this
    const { sendForm } = this
    const { setValue } = this
    const { setPerson } = this
    const { handleClickTest } = this

    const validateEmail = validator.isEmail;

    return (
      <Root {...this.props}>
        <Menu attached />
        <MobileMenu attached />
        <Container>
          <ToggleDisplay show={!this.state.isVisibleSuccesSubscriptionMessage} tag="section">
            <form ref={c => { this.form = c }} onSubmit={this.sendForm} action="">
            <ValidateGroup>

              <Section>
                <Heading>Pre-sale</Heading>
              </Section>
              <Description>
                The information you enter below will be verified by a member of our team, in order to make sure that the information you send is regulatory compliant, and that your local legislation allows you to participate.
              </Description>
              <Section>
                <ControlBlock>

                  <Input name="tokensaleName" 
                    header="Name:" 
                    type="text"
                    placeholder="e.g. John Doe" 
                    onChange={this.handleClickTest} 
                    validations={[required, email]}
                  />

                  <Validate validators={[validateEmail]}>
                    <Input name="tokensaleEmail" 
                      header="Email:" 
                      type="email"
                      placeholder="name@email.com" 
                      onChange={setValue}
                    />
                    <ErrorMessage>Not a valid email</ErrorMessage>
                  </Validate>

                </ControlBlock>
                <VerticalBlock>
                  <Text>[Test Header Text]:</Text>

                  <Select name="tokensalePerson" onChange={setPerson}>
                    <option value="person">Person</option>
                    <option value="company">Company</option>
                  </Select>

                  <Text>Country of residence:</Text>
                  <Select name="tokensaleCountry" onChange={setValue}>
                    <option value=""></option>
                    {
                      countries.map((country, i) => 
                        <option key={ i } value={ country.name }>{ country.name }</option>
                      )
                    }
                  </Select>
                  
                  <Text>Planned contribution:</Text>
                  <Select name="tokensaleAmount" value={this.state.tokensaleAmount} onChange={setValue}>
                      {
                        this.amounts[ this.state.tokensalePerson ].map((amount, i) => 
                          <option key={ i } value={ amount }>{ amount }</option>
                        )
                      }
                  </Select>
                  

                </VerticalBlock>
                {/* <VerticalBlock>
                      <Text>Identification:</Text>
                      <FileInput
                        readAs='binary'
                      />
                    </VerticalBlock> */}
              </Section>
              <Section>
                <ControlBlock>
                  <Checkbox type="checkbox" name="chekbox1">
                    Prepare your previous researches to be included into genesis block
                    </Checkbox>
                </ControlBlock>
              </Section>

              <Button submit primary>
                Send
              </Button>

              </ValidateGroup>
            </form>
          </ToggleDisplay>
          <ToggleDisplay show={this.state.isVisibleSuccesSubscriptionMessage} >
            <form onSubmit={this.sendForm} action="">
              <Message>
                <Text>
                  Thank you for joining DEIP community. We have added you to our initial users list and provide you with a link as soon as an alfa version of DEIP platform is released.
            </Text>
              </Message>
            </form>
          </ToggleDisplay>
        </Container>
      </Root>
    )
  }
}

export default TokensaleForm
