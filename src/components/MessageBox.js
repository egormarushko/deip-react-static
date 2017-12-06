import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { m } from '../util/styles'

import Heading from 'components/Heading'
import Text from 'components/Text'

const Root = styled.div`
  border: 1px solid ${p => p.theme.palette.primaryLight};
  border-radius: 4px;
  position: relative;
  text-align: left;

  p:first-child {
    font-weight: 500;
  }
  p:not(:nth-child(3)) {
    margin: 0;
  }
  p:nth-child(3) {
    padding-top: 8px;
    margin: 0;
  }
`

const Content = styled.div`padding: 16px 24px;`

const ArrowLeft = styled.div`
  position: absolute;
  background: #fff;
  top: 65px;

  ${m.lessThan('small')`
    display: none;
  `};

  &:after,
  &:before {
    right: 100%;
    top: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(255, 255, 255, 0);
    border-right-color: #fff;
    border-width: 10px;
    margin-top: -10px;
  }
  &:before {
    border-color: rgba(${p => p.theme.palette.primaryLight});
    border-right-color: ${p => p.theme.palette.primaryLight};
    border-width: 11px;
    margin-top: -11px;
  }
`

const ArrowTop = styled.div`
  position: absolute;
  background: #fff;
  left: 50%;

  ${m.greaterThan('small')`
    display: none;
  `};

  &:after,
  &:before {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #fff;
    border-width: 10px;
    margin-left: -10px;
  }
  &:before {
    border-color: rgba(${p => p.theme.palette.primaryLight});
    border-bottom-color: ${p => p.theme.palette.primaryLight};
    border-width: 11px;
    margin-left: -11px;
  }
`

const MessageBox = ({ name, role, children, ...rest }) => (
  <Root {...rest}>
    <ArrowTop />
    <ArrowLeft />
    <Content>
      <Text>{name}</Text>
      <Text type="small">{role}</Text>
      <Text>{children}</Text>
    </Content>
  </Root>
)

MessageBox.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default MessageBox
