import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonContainer = styled.button`
  display: inline-block;
  width: 3em;
  height: 3em;
  border: none;
  outline: none;
  background-color: ${props => props.color || 'red'};
  color: white;
  border-radius: 100%;
  font-size: 24px;
  transition: all 0.1s ease;
`

const RoundButton =  props => {
  const { icon, color, disabled } = props

  return (
    <ButtonContainer
      color={color}
      onClick={props.onClick}
      disabled={disabled || false}
    >
      <span>
        <i aria-hidden="true" className={icon}></i>
      </span>
    </ButtonContainer>
  )
}

RoundButton.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default RoundButton
