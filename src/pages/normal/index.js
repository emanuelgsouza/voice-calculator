import React, { Component } from 'react';
import Visor from '../../components/Visor';
import ButtonsContainer from './components/ButtonsContainer';
import './styles.css';

export default class NormalPage extends Component {
  render () {
    return (
      <div className="normal-page">
        <Visor value={'0'} />
      
        <ButtonsContainer />
      </div>
    )
  }
}
