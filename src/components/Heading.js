import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const _Heading = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  color: ${p => p.theme.palette.primary};
  margin: 0 0 16px 0;
`

const Subheading = styled.h2`
  font-weight: 200;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0.48px;
  color: ${p => p.theme.palette.text.secondary};
  margin: 0 0 24px 0;
`

const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  text-transform: uppercase;
  color: ${p => p.theme.palette.primary};
  margin: 0 0 16px 0;
`

const Heading = ({ type, ...rest }) => {
  if (type === 'heading') return <_Heading {...rest} />
  if (type === 'sub') return <Subheading {...rest} />
  if (type === 'title') return <Title {...rest} />
  return <_Heading {...rest} />
}

Heading.propTypes = {
  type: PropTypes.oneOf(['heading', 'sub', 'title']),
}

export default Heading
