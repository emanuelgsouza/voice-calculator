import React, { Component } from 'react';
import Visor from '../../components/Visor';
import ButtonsContainer from './components/ButtonsContainer';
import './styles.css';
import processButton from './utils/process-button'

export default class NormalPage extends Component {
  state = {
    value: ''
  }

  onInput = (buttonValue) => {
    const { value } = this.state

    this.setState({
      value: processButton(value, buttonValue)
    })
  }

  onEvaluate = () => {
    alert('Not implemented yet')
  }

  render () {
    return (
      <div className="normal-page">
        <Visor value={this.state.value} />
      
        <ButtonsContainer onInput={this.onInput} onEvaluate={this.onEvaluate} />
      </div>
    )
  }
}
