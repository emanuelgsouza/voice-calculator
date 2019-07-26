import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Toolbar = styled.header`
  height: 60px;
  padding: 20px;
  background-color: #222831;
  color: white;
  font-weight: bold;
  font-weight: 600;
  font-size: 1.2rem;

  a {
    color: white;
    text-decoration: none;
  }
`;

export default () => {
  return (
    <Toolbar>
      <Link to="/"> Calculator </Link>
    </Toolbar>
  )
}
