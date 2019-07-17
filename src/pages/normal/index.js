import React, { Component } from 'react';
import Visor from '../../components/Visor';
import ButtonsContainer from './components/ButtonsContainer';
import './styles.css';

export default class NormalPage extends Component {
  state = {
    value: ''
  }

  onInput = (inputValue) => {
    const { value } = this.state

    this.setState({
      value: `${value}${inputValue}`
    })
  }

  onEvaluate = () => {}

  render () {
    return (
      <div className="normal-page">
        <Visor value={this.state.value} />
      
        <ButtonsContainer onInput={this.onInput} onEvaluate={this.onEvaluate} />
      </div>
    )
  }
}
