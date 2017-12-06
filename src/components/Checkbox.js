import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { placeholder } from 'polished'

import Icon from 'components/Icon'

const Root = styled.div`display: inline-flex;`

const Check = styled.div`
  border-radius: 4px;
  border: 1px solid ${p => p.theme.palette.primary};
  text-align: center;
  color: ${p => p.theme.palette.primary};
  width: 25px;
  min-width: 25px;
  height: 25px;
  line-height: 25px;
  margin-right: 16px;
  cursor: pointer;
`

const Comp = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  opacity: 0;

  width: 25px;
  min-width: 25px;
  height: 25px;
  line-height: 25px;
  cursor: pointer;

  & ~ .full {
    display: none;
  }
  & ~ .empty {
    display: block;
  }

  &:checked ~ .full {
    display: block;
  }
  &:checked ~ .empty {
    display: none;
  }
`

const Label = styled.label`
  font-size: 16px;
  padding-top: 2px;
  cursor: pointer;
`

const Checkbox = ({ name, checked, children, className, ...rest }) => (
  <Root className={className}>
    <Comp id={name} name={name} defaultChecked={checked} {...rest} />
    <Check className="full">
      <Icon>check</Icon>
    </Check>
    <Check className="empty" />
    <Label htmlFor={name}>{children}</Label>
  </Root>
)

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Checkbox
