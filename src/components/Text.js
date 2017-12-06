import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const p = styled.p`margin: 0;`

const Normal = p.extend`
  font-weight: 300;
  font-size: 16px;
  line-height: 1.5;
  color: ${p => p.theme.palette.primary};
`

const Small = p.extend`
  font-size: 12px;
  color: ${p => p.theme.palette.text.secondary};
`

const Text = ({ type, ...rest }) => {
  if (type === 'normal') return <Normal {...rest} />
  if (type === 'small') return <Small {...rest} />
  return <Normal {...rest} />
}

Text.propTypes = {
  type: PropTypes.oneOf(['normal', 'small']),
}

export default Text
