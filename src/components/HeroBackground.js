import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { m } from '../util/styles'

import mouse from './images/icon_mouse.svg'

const Body = styled.div`
  z-index: -10;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  line {
    transition: stroke-width 0.3s;
    ${m.lessThan('small')`
      display: none;
    `};
  }
`

const Wrap = styled.div`/* pointer-events: none;*/`

const Icon = styled.img`
  position: absolute;
  left: calc(50% - 9px);
  bottom: 10%;
`

const renderLines = (cb, count) => {
  const lines = []
  for (let i = 1; i < count; i++) {
    const x = `${i * 100 / count}%`
    lines.push(
      <line
        ref={cb}
        x1={x}
        y1="0"
        x2={x}
        y2="100%"
        stroke="rgba(39, 49, 96, 0.5)"
        strokeWidth="2"
        key={i}
      />,
    )
  }
  return lines
}

function makeInterpolation(range, f, t) {
  return value => {
    if (value >= range) return f
    if (value === 0) return t
    return (range - value) / range * (t - f) + f
  }
}

class HeroBackground extends React.Component {
  lineRefs = []

  interpolateWidth = makeInterpolation(100, 2, 10)
  interpolateColor = makeInterpolation(100, 0.5, 1)

  componentDidMount() {
    document.addEventListener('mousemove', this.mouseMove)
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseMove)
  }

  mouseMove = e => {
    this.lineRefs.forEach(line => {
      const rect = line.getBoundingClientRect()
      const delta = Math.abs(e.clientX - rect.x)

      line.setAttribute('stroke-width', this.interpolateWidth(delta))
      line.setAttribute(
        'stroke',
        `rgba(39, 49, 96, ${this.interpolateColor(delta)})`,
      )
    })
  }

  addLine = ref => this.lineRefs.push(ref)

  render() {
    this.lineRefs = []

    return (
      <Body>
        <svg style={{ zIndex: -10, height: '100%', width: '100%' }}>
          <defs>
            <linearGradient id="heroGradient" gradientTransform="rotate(90)">
              <stop offset="50%" stopColor="#331d50" />
              <stop offset="100%" stopColor="#1C3D6E" />
            </linearGradient>
            <mask id="heroMask">
              <ellipse cx="50%" cy="-10%" rx="100%" ry="100%" fill="white" />
            </mask>
          </defs>
          <ellipse
            id="ellipse"
            cx="50%"
            cy="-10%"
            rx="100%"
            ry="100%"
            fill="url(#heroGradient)"
          />
          <g mask="url(#heroMask)">{renderLines(this.addLine, 70)}</g>
        </svg>
        <Icon src={mouse} />
      </Body>
    )
  }
}

export default HeroBackground
