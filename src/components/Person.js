import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { m } from '../util/styles'

import Text from 'components/Text'
import Heading from 'components/Heading'
import icon from 'components/Icon'
import academicIcon from 'components/AcademicIcon'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 132px;
`

const special = p =>
  p.special
    ? `border: 4px solid #f2c94c`
    : `box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15)`

const Avatar = styled.img`
  border-radius: 100%;
  width: 132px;
  height: 132px;
  margin-bottom: 8px;
  ${special};
`

const Info = styled.div`
  text-align: center;
  margin-bottom: 8px;
  p:first-child {
    font-weight: 500;
  }
  p {
    margin: 0;
  }
`

const Icon = styled(icon)`
  font-size: 18px;
  ${m.lessThan('small')`
    font-size: 24px;
  `};
`

const AcademicIcon = styled(academicIcon)`
  font-size: 18px;
  ${m.lessThan('small')`
    font-size: 24px;
  `};
`

const A = styled.a`
  display: inline-block;
  color: ${p => p.theme.palette.primary};
  opacity: 0.3;
  text-decoration: none;
  transition: opacity 0.15s;

  &:hover {
    opacity: 1;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`

const Person = ({ special, src, name, role, facebook, linkedin, github, twitter, researchgate, ...rest }) => (
  <Root {...rest}>
    <Avatar special={special} src={src} />
    <Info>
      <Text>{name}</Text>
      <Text type="small">{role}</Text>
    </Info>
    <div>
      {facebook && (
        <A href={facebook}>
          <Icon>facebook-square</Icon>
        </A>
      )}
      {linkedin && (
        <A href={linkedin}>
          <Icon>linkedin-square</Icon>
        </A>
      )}
      {github && (
        <A href={github}>
          <Icon>github-square</Icon>
        </A>
      )}
      {twitter && (
        <A href={twitter}>
          <Icon>twitter-square</Icon>
        </A>
      )}
      {researchgate && (
        <A href={researchgate}>
          <AcademicIcon>researchgate-square</AcademicIcon>
        </A>
      )}
    </div>
  </Root>
)

Person.propTypes = {
  special: PropTypes.bool,
  src: PropTypes.string.isRequired,
  name: PropTypes.string,
  role: PropTypes.string,
  facebook: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  researchgate: PropTypes.string,
}

export default Person
