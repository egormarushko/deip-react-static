import React, { Component } from 'react'
import { Link as link } from 'react-static'
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
import customSelect from 'components/Select'
import icon from 'components/Icon'

import axios from 'axios'
import ToggleDisplay from 'react-toggle-display'
import FileInput from 'react-simple-file-input'
import CssBaseline from 'material-ui/CssBaseline'
import { Creatable } from 'react-select'

import validator from 'validator';
import { Validate, ValidateGroup, ErrorMessage } from "react-validate";
import { countries } from '../components/data/Country';

const Link = styled(link)`
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 32px;
  }
`

const Select = styled.select `
  border-radius: 5px;
  border: 1px solid ${p => p.theme.palette.primaryLight};
  font-size: 16px;
  color: 1px solid ${p => p.theme.palette.primary};
  line-height: 49px;
  height: 49px;
  padding: 0 0px 0 16px;
  width: 100%;
  min-width: 0;
  transition: border 0.15s;
  position: relative;
  background-color: white;
  -webkit-appearance: none;
  -moz-appearance: none;

  & + i {
    color: ${p => p.theme.palette.primaryLight};
    transition: color 0.15s;
  }

  &:focus {
    outline: none;
    border: 1px solid ${p => p.theme.palette.primary};
  }

  &:focus + i {
    color: ${p => p.theme.palette.primary};
  }
`
const SelectBlock = styled.div `
  width: calc(100% / 2 - 32px);
  margin: 16px;
  position: relative;

  ${m.lessThan('small') `
    width: 100%;
    margin: 8px;
  `};
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

const Section = styled.div`margin: 30px 0;`

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

const Icon = styled(icon)`
  position: absolute;
  font-size: 18px;
  line-height: 52px;
  right: 16px;
  pointer-events:none;
`

const Input = styled(inputfull) `
  width: calc(100% / 2 - 32px);
  margin: 16px;

  ${m.lessThan('small') `
    width: 100%;
    margin: 8px;
  `};
`

const CustomSelect = styled(customSelect) `
  width: calc(100% / 2 - 32px);
  margin: 16px;

  ${m.lessThan('small') `
    width: 100%;
    margin: 8px;
  `};
`

const Checkbox = styled(checkbox) `
  width: 100%;
  margin: 16px;

  ${m.lessThan('small') `
    margin: 8px;
  `};
`

class TokensaleForm extends Component {
  state = {
    isVisibleSuccesSubscriptionMessage: false,
    tokensaleName: '',
    tokensaleEmail: '',
    tokensalePerson: 'person',
    tokensaleCountry: 'Belarus',
    tokensaleAmount: '< € 5,000',
  }

  amounts = {
    company: [
      '< € 25,000',
      '€ 25,000 - € 100,000', 
      '€ 100,000 - € 500,000', 
      '€ 500,000 - € 1,000,000' 
    ],
    person: [
      '< € 5,000',
      '€ 5,000 - € 10,000',
      '€ 10,000 - € 50,000',
      '€ 50,000 - € 100,000',
      '€ 100,000 - € 500,000',
      '> € 500,000'
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
      name: this.state.tokensaleName,
      email: this.state.tokensaleEmail,
      party: this.state.tokensalePerson,
      country: this.state.tokensaleCountry,
      amount: this.state.tokensaleAmount
    };

    console.log(form);

    axios.post('http://146.185.140.12/api/token-sale-request', form)
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
    debugger    
    this;
  };

  render() {
    const { setShow } = this
    const { sendForm } = this
    const { setValue } = this
    const { setPerson } = this

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
                  The information you enter below will be verified, in order to make sure that the information you send is regulatory compliant, and your local legislation allows you to participate.
                </Description>

                <Section>
                  <ControlBlock>
                    <Input name="tokensaleName"
                      header="Name:"
                      type="text"
                      defaultValue=""
                      required={true}
                      placeholder="e.g. John Doe"
                      onChange={setValue}
                    />
                    <Input name="tokensaleEmail"
                      header="Email:"
                      type="email"
                      required={true}
                      placeholder="name@email.com"
                      onChange={setValue}
                    />
                    <SelectBlock>
                        <Text style={{ paddingBottom: '5px' }}>Party:</Text>
                        <Select name="tokensalePerson" onChange={setPerson}>
                          <option value="person">Person</option>
                          <option value="company">Company</option>
                        </Select>
                        <Icon>angle-down</Icon>
                    </SelectBlock>
                    <CustomSelect
                      name ="tokensaleCountry"
                      header = "Country of residence:"
                      options = {countries}
                      icon = "angle-down"
                      onChange={setValue}
                    />
                    <CustomSelect
                      name ="tokensaleAmount"
                      header = "Planned contribution:"
                      options = {this.amounts[this.state.tokensalePerson]}
                      icon = "angle-down"
                      onChange={setValue}
                    />
                  </ControlBlock>

                  <ControlBlock>
                    <Checkbox required={true} type="checkbox" name="tokensaleAgreement">
                      By accessing/registering the DEIP Platform, I expressly understand, accept and agree with the processing and storage by the Company of my personal data and the free circulation of such data.
                    </Checkbox>      
                  </ControlBlock>
                  <Text>By clicking Send, you agree to our <Link to="/TERMS_FOR _REQUEST.pdf" target="_blank">Terms for request</Link></Text> 
                </Section>

                <Button submit primary>Send</Button>

              </ValidateGroup>
            </form>
          </ToggleDisplay>

          <ToggleDisplay show={this.state.isVisibleSuccesSubscriptionMessage} >
              <Message>
                <Text>Thank you for your interest in DEIP token sale. We will send you all the required details soon.</Text>
              </Message>
          </ToggleDisplay>
        </Container>
      </Root>
    )
  }
}

export default TokensaleForm
