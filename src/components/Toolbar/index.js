import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <header className="toolbar">
      <Link to="/"> Calculator </Link>
    </header>
  )
}
