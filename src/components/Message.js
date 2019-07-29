import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MessageContainer = styled.div`
  margin: 0 20px;
  padding: 2rem 1.25rem;
  color: white;
  background-color: ${props => props.color};
`

const Message = props => {
  return (
    <MessageContainer color={props.color}>
      <p> {props.message} </p>
    </MessageContainer>
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Message
