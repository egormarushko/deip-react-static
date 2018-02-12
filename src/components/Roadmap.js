import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { m } from '../util/styles'

import bg from './images/bg.png'

export const Main = styled.div`
  overflow: hidden;
  position: relative;
  background-image: url(${bg});
  background-repeat: repeat-y;
  background-size: 100% 411px;

  ${m.lessThan('small')`
    background: transparent;

    &:after {
      content: '';
      position: absolute;
      border-radius: 3px;
      background: rgba(255,255,255,0.2);
      left: calc(25% + 24px);
      top: 0;
      width: 6px;
      height: 100%;
    }
  `};
`

export const Section = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  height: ${411 / 2}px;

  ${m.lessThan('small')`
    flex-flow: column;
    height: auto;
  `};
`
export const SectionReverse = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  height: ${411 / 2}px;
  flex-direction: row-reverse;

  ${m.lessThan('small')`
    flex-flow: column;
    height: auto;
  `};
`

const EntryRoot = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  color: #fff;
  top: 52px;
  width: 25%;
  min-width: 25%;
  height: 100%;
  opacity: ${p => (p.done ? '0.2' : '1')};

  ${m.lessThan('small')`
    flex-flow: row;
    top: auto;
    width: 100%;
    min-width: 100%;
    padding: 36px 0;
  `};
`

const EntryLabel = styled.div`
  font-weight: 700;
  text-align: center;
  line-height: 1.5;
  text-transform: uppercase;
  margin-bottom: 16px;

  ${m.lessThan('small')`
    text-align: right;
    min-width: 25%;
    max-width: 25%;
    margin: 0;
  `};
`

const EntryPoint = styled.div`
  border-radius: 100%;
  background: #fff;
  width: 22px;
  height: 22px;
  min-width: 22px;
  min-height: 22px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${m.lessThan('small')`
    margin: 0 16px;
  `};
`

const EntryText = styled.div`
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  margin: 16px 0 0 0;

  ${m.lessThan('small')`
    text-align: left;
    margin: 0;
  `};
`

export const Entry = ({ done, label, text }) => (
  <EntryRoot done={done}>
    <EntryLabel>{label}</EntryLabel>
    <EntryPoint />
    <EntryText>{text}</EntryText>
  </EntryRoot>
)

const PopupRoot = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  color: #fff;
  top: -38px;
  height: 100%;
  opacity: ${p => (p.done ? '0.2' : '1')};

  ${m.lessThan('small')`
    flex-flow: row-reverse;
    justify-content: flex-end;
    top: auto;
    padding: 16px 0;
    left: calc(25% + 24px);
  `};
`

const PopupContent = styled.div`
  width: 150px;
  min-width: 150px;
`

const PopupLabel = styled.div`
  background: ${p => (p.accent ? '#e71d36' : '#fff')};
  font-weight: 400;
  font-size: 15px;
  color: ${p => (p.accent ? '#fff' : p.theme.palette.primary)};
  height: 24px;
  min-height: 24px;
  line-height: 24px;
  width: 100%;
`

const PopupText = styled.div`
  background: rgba(255, 255, 255, 0.1);
  font-weight: 300;
  font-size: 18px;
  height: 72px;
  line-height: 72px;
  width: 100%;
`

const PopupArrow = styled.div`
  ${m.greaterThan('small')`
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-top: 16px solid rgba(255, 255, 255, 0.1);
    width: 0;
    height: 0;
    margin-top: 8px;
  `};

  ${m.lessThan('small')`
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-right: 16px solid rgba(255,255,255,0.1);
    width: 0;
    height: 0;
    margin-right: 8px;
  `};
`

const PopupPoint = styled.div`
  border-radius: 100%;
  background: ${p => (p.accent ? '#e71d36' : '#fff')};
  width: 9px;
  min-width: 9px;
  height: 9px;
  min-height: 9px;
  margin-top: 16px;

  ${m.lessThan('small')`
    margin-top: 0;
    margin-right: 16px;
  `};
`

export const Popup = ({ done, accent, label, text }) => (
  <PopupRoot done={done}>
    <PopupContent>
      <PopupLabel accent={accent}>{label}</PopupLabel>
      <PopupText>{text}</PopupText>
    </PopupContent>
    <PopupArrow />
    <PopupPoint accent={accent} />
  </PopupRoot>
)
