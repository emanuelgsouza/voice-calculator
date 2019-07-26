import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ActionsContainer = styled.div`
  width: 100%;

  .action-button {
    width: 100%;
    display: block;
    padding: 10px 0;
    background-color: #00adb5;
    text-decoration: none;
    text-align: center;
    color: white;
    font-size: 1.5rem;
    border-radius: 2px;
  }

  .action-button:first-of-type {
    margin-bottom: 16px;
  }
`;

export default () => {
  return (
    <ActionsContainer>
      <Link className="action-button" to="/normal"> Normal Mode </Link>
      <Link className="action-button" to="/voice"> Voice Mode </Link>
    </ActionsContainer>
  )
}
