import React, { Component } from 'react';
import Visor from '../../components/Visor';
import ButtonsContainer from './components/ButtonsContainer';
import { PageContainer } from '../../styles'
import processButton from '../../utils/process-button'
import { evaluate } from 'mathjs'

export default class NormalPage extends Component {
  state = {
    value: '',
    resetState: false
  }

  onInput = (buttonValue) => {
    const { value, resetState } = this.state

    if (resetState) {
      this.setState({
        value: processButton('', buttonValue),
        resetState: false
      })
      return
    }

    this.setState({
      value: processButton(value, buttonValue)
    })
  }

  onEvaluate = () => {
    const value = evaluate(this.state.value)
    this.setState({
      value,
      resetState: true
    })
  }

  render () {
    return (
      <PageContainer>
        <Visor value={this.state.value} />
      
        <ButtonsContainer onInput={this.onInput} onEvaluate={this.onEvaluate} />
      </PageContainer>
    )
  }
}
